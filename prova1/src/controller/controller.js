const service = require('../service/service')
const movieNotFound ="Filme não encontrado"

const getAll = (req,res) => {
    res.status(200).send(service.getAll())
}
const getById = (req,res) => {
    if(!validId(req.params.id)){        
        return res.status(404).send(movieNotFound)
    }
    res.status(200).send(service.getById(req.params.id))
}

const create = (req,res) => {
    const body = req.body
    if (!validBody(body)) {
        return res.status(400).send("Dados inconsistentes")
    }
    service.create(body)
    res.status(200).send("Filme criado com sucesso!!")
}
const update = (req,res) => {
    const body = req.body
    if (!validBody(body)){
        return res.status(400).send("Dado inconsistentes")
    }
    if(!validId(req.params.id)){        
        return res.status(404).send(movieNotFound)
    }
    service.update(req.params.id, req.body)
    res.status(200).send("Filme atualizado com sucesso!!")
}
const remove = (req,res) => {
    if(!validId(req.params.id)){        
        return res.status(404).send(movieNotFound)
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

const validBody = (body) => {
    const {id, title, decription, release_year} = body
    let isValid = true
    if (id === undefined || title === undefined || decription === undefined || release_year === undefined) {
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