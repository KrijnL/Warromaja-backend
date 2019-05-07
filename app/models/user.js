module.exports = function (sequelize, type) {
  var User = sequelize.define('User', {
    name: {
      type: type.STRING,
      allowNull: false
    },
    email: {
      type: type.STRING(150),
      unique: true,
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'Must be a valid email address'
        },
        notNull: {
          msg: 'Email address can\'t be empty'
        }
      }
    }
  })
  return User
}
