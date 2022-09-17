const service = require('../service/service')

const getAll = (req,res) => {
    res.status(200).send(service.getAll())
}
const getById = (req,res) => {
    if(!validId(req.params.id)){        
        return res.status(404).send("Filme não encontrado")
    }
    res.status(200).send(service.getById(req.params.id))
}

const create = (req,res) => {
    service.create(req.body)
    res.send("Filme criado com sucesso")
}
const update = (req,res) => {
    service.update(req.params.id, req.body)
    res.send("Filme atualizado com sucesso")
}
const remove = (req,res) => {
    if(!validId(req.params.id)){        
        return res.status(404).send("Filme não encontrado")
    }
    service.remove(req.params.id)    
    res.status(204)
}

const validId = (elementId) => {
    let movies = []
    let isValid = true
    movies = service.getAll()
    const i = movies.findIndex (ele => ele.id == elementId)
    if (i === -1){
        isValid = false
        return isValid
    }
    return isValid
}

module.exports={
    getAll,
    create,
    update,
    remove,
    getById
}