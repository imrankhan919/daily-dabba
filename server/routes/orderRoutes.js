const express = require('express')
const { addOrder, getOrder, updateOrder, getMyOrders } = require('../controllers/orderController')

const router = express.Router()


router.get('/:oid', getOrder)
router.get('/all/my-orders', getMyOrders)
router.post('/create-order/:mid', addOrder)
router.put('/:oid', updateOrder)


module.exports = router