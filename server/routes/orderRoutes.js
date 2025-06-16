const express = require('express')
const { addOrder, getOrder, updateOrder, getMyOrders } = require('../controllers/orderController')
const protect = require('../middleware/authMiddleware')

const router = express.Router()


router.get('/:oid', protect, getOrder)
router.get('/all/my-orders', protect, getMyOrders)
router.post('/create-order/:mid', protect, addOrder)
router.put('/:oid', protect, updateOrder)


module.exports = router