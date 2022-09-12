const service = require('../service/service')
const mensagemErro = 'Error request'

const getAll = (req,res) => {
    res.send(service.getAll())
}
const create = (req,res) => {
    service.create(req.body)
    res.send("Imóvel criado com sucesso")
}
const update = (req,res) => {
    service.update(req.params.id, req.body)
    res.send("Imóvel atualizado com sucesso")
}
const remove = (req,res) => {
    service.remove(req.params.id)    
    res.send("Imóvel removido com sucesso")
}

module.exports={
    getAll,
    create,
    update,
    remove
}