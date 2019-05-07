const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const models = require('./app/models')

const app = express()
const PORT = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// CORS
// app.use(cors())

app.get('/', (req, res) => {
  res.send('Warromaja API v0.1.0')
})

require('./app/routes')(app, models)
app.listen(PORT, () => {
  console.log('listening on port 3000')
})
