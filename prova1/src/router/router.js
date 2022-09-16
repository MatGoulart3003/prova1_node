const express = require('express')
const router = express.Router()
const controller = require('../controller/controller')

router.get('/', controller.getAll)
router.post('/', controller.create)
router.put('/:id', controller.update)
router.delete('/:id', controller.remove)
router.get('/:id' , controller.getById)

module.exports = router