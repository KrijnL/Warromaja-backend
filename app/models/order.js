module.exports = function (sequelize, type) {
  var Order = sequelize.define('artist', {
    discountCode: {
      discountCode: type.STRING
    }
  })
  return Order
}
