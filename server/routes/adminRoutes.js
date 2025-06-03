const express = require('express')
const { addMeal, editMeal, updateMeal, removeMeal, viewAllUsers, viewAllRatings, viewAllOrders, updateOrder } = require('../controllers/adminControllers')

const router = express.Router()


router.post('/add-meal', addMeal)
router.put('/update-meal/:mid', updateMeal)
router.delete('/remove-meal/:mid', removeMeal)


router.get("/view-users", viewAllUsers)
router.get("/view-ratings", viewAllRatings)
router.get("/view-orders", viewAllOrders)


router.put("/update-order/:oid", updateOrder)


module.exports = router