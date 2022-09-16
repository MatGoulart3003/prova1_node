const express = require('express')
const router = require('./router/router')
const app = express()
app.use(express.json())
const port = 8087

const movie = []

app.use('/api/movies', router)

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))
