const express = require('express')
const adminProtect = require("../middleware/adminMiddleware")
const { addMeal, editMeal, updateMeal, removeMeal, viewAllUsers, viewAllRatings, viewAllOrders, updateOrder } = require('../controllers/adminControllers')


const router = express.Router()


router.post('/add-meal', adminProtect, addMeal)
router.put('/update-meal/:mid', adminProtect, updateMeal)
router.delete('/remove-meal/:mid', adminProtect, removeMeal)


router.get("/view-users", adminProtect, viewAllUsers)
router.get("/view-ratings", adminProtect, viewAllRatings)
router.get("/view-orders", adminProtect, viewAllOrders)


router.put("/update-order/:oid", adminProtect, updateOrder)


module.exports = router