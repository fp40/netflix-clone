const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const database = require('./src/services/database')

const filmeRoutes = require('./src/routes/filmes.routes')
const usuarioRoutes = require('./src/routes/usuarios.routes')
const episodiosRoutes = require('./src/routes/episodios.routes')

///MIDDLEWARES
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))

/// ROUTES
app.use('/', filmeRoutes)
app.use('/usuario', usuarioRoutes)
app.use('/episodio', episodiosRoutes)

app.listen(3000, () => {
  console.log('Meu servidor está funcionando')
})
