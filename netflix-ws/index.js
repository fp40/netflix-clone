const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const database = require('/src/services/database')

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use('/', routes)

app.listen(3000, () => {
  console.log('Meu servidor está funcionando')
})
