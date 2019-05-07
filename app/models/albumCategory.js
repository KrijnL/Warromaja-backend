module.exports = function (sequelize, type) {
  var AlbumCategory = sequelize.define('albumCategory', {
    description: {
      type: type.STRING
    }
  })
  return AlbumCategory
}
