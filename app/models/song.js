module.exports = function (sequelize, type) {
  var Song = sequelize.define('song', {
    title: {
      type: type.STRING,
      allowNull: false
    },
    url: {
      type: type.STRING
    },
    thumbnail: {
      type: type.STRING
    },
    duration: {
      type: type.INTEGER
    }
  })
  return Song
}
