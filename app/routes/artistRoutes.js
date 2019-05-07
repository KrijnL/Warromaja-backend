module.exports = function (app, db) {
  app.post('/artist', (req, res) => {
    // Route goes here
    console.log(req.body)
    res.send('hello')
  })

  app.get('/artist', (req, res) => {
    res.send('GET artist')
  })
}
