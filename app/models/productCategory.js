module.exports = function (sequelize, type) {
  var ProductCategory = sequelize.define('productCategory', {
    description: {
      type: type.STRING
    }
  })
  return ProductCategory
}
