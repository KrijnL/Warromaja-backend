/**
 * Class that bootstraps the ORM conntection
 */

const Sequelize = require('sequelize')

const userModel = require('./user')
const artistModel = require('./artist')
const albumModel = require('./album')
const songModel = require('./song')
const albumCatModel = require('./albumCategory')
const productModel = require('./product')
const orderModel = require('./order')
const productCatModel = require('./productCategory')

var config = require('../../config/db')

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.url,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

// Test connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection successfully established.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

// Define models
const user = userModel(sequelize, Sequelize)
const artist = artistModel(sequelize, Sequelize)
const album = albumModel(sequelize, Sequelize)
const song = songModel(sequelize, Sequelize)
const albumCategory = albumCatModel(sequelize, Sequelize)
const product = productModel(sequelize, Sequelize)
const order = orderModel(sequelize, Sequelize)
const productCategory = productCatModel(sequelize, Sequelize)

// Associations
artist.belongsToMany(song, { through: 'songArtists' })
song.belongsToMany(artist, { through: 'songArtists' })
album.belongsToMany(song, { through: 'tracklist' })
song.belongsToMany(album, { through: 'tracklist' })
albumCategory.hasMany(album)
product.belongsToMany(order)
order.belongsToMany(product)
productCategory.hasMany(product)
user.hasMany(order)

// Sync
sequelize.sync()
  .then(() => {
    console.log('Database & tables created.')
  })

module.exports = {
  user,
  artist,
  album,
  song,
  albumCategory,
  product,
  order,
  productCategory
}
