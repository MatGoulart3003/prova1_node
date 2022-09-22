const express = require('express')
const router = require('./router/router')
const app = express()
const auth = require('./middleware/auth')
app.use(express.json())
const port = 8087

app.use(auth.authentication)
app.use('/api/movies', router)

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))
