const movies = []

const getAll = () => {
    return movies
}
const create = (subject) => {
    movies.push(subject)
}
const update = (elementId, element) =>{
    const i = movies.findIndex(ele => ele.id == elementId)
    movies[i] = element
}
const remove = (elementId) => {
    const i = movies.findIndex(ele => ele.id == elementId)
    movies.splice(i,1)
}
const getById = (elementId) => {
    const i = movies.findIndex(ele => ele.id == elementId)
    let eleSearched = movies[i]
    return eleSearched

}
module.exports = {
    getAll,
    create,
    update,
    remove,
    getById    
}