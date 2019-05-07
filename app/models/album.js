module.exports = function (sequelize, type) {
  var Album = sequelize.define('album', {
    title: {
      type: type.STRING
    },
    cover: {
      type: type.STRING
    },
    bandcampUrl: {
      type: type.STRING
    },
    blurb: {
      type: type.STRING
    },
    released: {
      type: type.BOOLEAN
    },
    releaseDate: {
      type: type.DATE
    }
  })
  return Album
}
