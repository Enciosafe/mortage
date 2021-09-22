const express = require('express')
const router = express.Router()
const { controllerWrapper } = require('./../../middlewares')
const ctrl = require('../../controllers/banks')

router.get('/',  controllerWrapper(ctrl.getList))
router.post('/', controllerWrapper(ctrl.addBank))
router.patch('/:bankId', controllerWrapper(ctrl.updateBank))
router.delete('/:bankId', controllerWrapper(ctrl.deleteBank))

module.exports = router
