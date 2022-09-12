const array = []

const getAll = () => {
    return array
}
const create = (subject) => {
    array.push(subject)
}
const update = (elementId, element) =>{
    const i = array.findIndex(ele => ele.id == elementId)
    array[i] = element
}
const remove = (elementId) => {
    const i = array.findIndex(ele => ele.id == elementId)
    array.splice(i,1)
}

module.exports = {
    getAll,
    create,
    update,
    remove    
}