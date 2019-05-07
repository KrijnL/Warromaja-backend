module.exports = function (sequelize, type) {
  var Artist = sequelize.define('Artist', {
    name: {
      type: type.STRING,
      allowNull: false
    },
    thumbnail: {
      type: type.STRING
    },
    bio: {
      type: type.STRING
    },
    soundcloudUrl: {
      type: type.STRING
    }
  })
  return Artist
}
