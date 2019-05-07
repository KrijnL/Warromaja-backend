// const Sequelize = require('sequelize')
module.exports = function (app, models) {
  // Routes
  app.get('/users', (req, res) => {
    getUsers(req, res)
  })

  app.post('/user', (req, res) => {
    createUser(req, res)
  })

  // Function definitions
  const createUser = (req, res) => {
    // TODO: secure this call
    models.user.create(req.body)
      .then(user => res.status(200).json(user))
  }

  const getUsers = (req, res) => {
    models.user.findAll().then(users => res.status(200).json(users))
      .catch(res.send('The resource could not be found'))
  }
}
