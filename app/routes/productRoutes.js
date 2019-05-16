module.exports = function (app, models) {
  // Routes
  app.post('/products', (req, res) => {
    createProduct(req, res)
  })

  app.get('/products', (req, res) => {
    getProducts(req, res)
  })

  app.get('/products/:id', (req, res) => {
    getProduct(req, res)
  })

  // Functions
  const getProducts = (req, res) => {
    models.product.findAll()
      .then(products => res.status(200).json(products)).catch(console.log('error!!'))
  }

  const createArtist = (req, res) => {
    models.product.create(req.body)
      .then(product => res.status(200).json(product))
  }

  const getProduct(req, res) => {
    models.product.findall({where:{ id: req.params.id}})
  }
}