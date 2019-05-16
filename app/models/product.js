module.exports = function (sequelize, type) {
  var Product = sequelize.define('product', {
    name: {
      type: type.STRING,
      allowNull: false
    },
    description: {
      type: type.STRING,
      allowNull: false
    },
    thumbnail: {
      type: type.STRING
    },
    price: {
      type: type.INTEGER,
      allowNull: false
    },
    inventory: {
      type: type.INTEGER
      allowNull: false
    }
  })
  return Product
}
