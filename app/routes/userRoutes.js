// const Sequelize = require('sequelize')
module.exports = function (app, models) {
  app.get('/users', (req, res) => {
    getUsers(req, res)
  })

  app.post('/user', (req, res) => {
    createUser(req, res)
  })

  const createUser = (req, res) => {
    // TODO: secure this call
    models.user.create(req.body)
      .then(user => res.status(200).json(user))
  }

  const getUsers = (req, res) => {
    models.user.findAll().then(users => res.status(200).json(users))
    // db.query('SELECT * FROM mockusers ORDER BY id ASC', { type: Sequelize.QueryTypes.SELECT })
    //   .then(users => res.status(200).json(users))
    //   .catch(err => console.log(err))
  }
}
