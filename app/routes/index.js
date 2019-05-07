const artistRoutes = require('./artistRoutes')
const userRoutes = require('./userRoutes')

module.exports = function (app, models) {
  artistRoutes(app, models)
  userRoutes(app, models)
  // Other routes go here
}
