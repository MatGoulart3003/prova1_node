const express = require('express')
const router = require('./router/imovel.router')
const app = express()
app.use(express.json())
const port = 8087

const imoveis = []

app.use('/imoveis', router)

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))
