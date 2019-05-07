module.exports = function (app, models) {
  // Routes
  app.post('/artists', (req, res) => {
    createArtist(req, res)
  })

  app.get('/artists', (req, res) => {
    getArtists(req, res)
  })

  // Functions
  const getArtists = (req, res) => {
    models.artist.findAll()
      .then(artists => res.status(200).json(artists)).catch(console.log('error!!'))
  }

  const createArtist = (req, res) => {
    models.artist.create(req.body)
      .then(artist => res.status(200).json(artist))
  }
}
