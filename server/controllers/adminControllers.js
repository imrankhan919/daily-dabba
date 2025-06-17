const User = require('../models/userModel')
const Meal = require('../models/mealModel')
const Order = require('../models/orderModel')
const Rating = require('../models/ratingModel')


const addMeal = async (req, res) => {

    const { name, description, isVeg, price, image } = req.body

    if (!name || !description || !isVeg || !price || !image) {
        res.status(400)
        throw new Error('Please Fill All Details!!')
    }

    const newMeal = await Meal.create({
        name, description, isVeg, price, image
    })

    if (!newMeal) {
        res.status(400)
        throw new Error('Meal Not Created')
    }

    res.status(201).json(newMeal)


}

const updateMeal = async (req, res) => {
    const updatedMeal = await Meal.findByIdAndUpdate(req.params.mid, req.body, { new: true })
    if (!updatedMeal) {
        res.status(400)
        throw new Error('Meal Not Updated')
    }
    res.status(200).json(updatedMeal)
}

const removeMeal = async (req, res) => {

    await Meal.findByIdAndDelete(req.params.mid)

    res.status(200).json({
        _id: req.params.mid,
        message: "Meal Removed Success!"
    })


}

const viewAllUsers = async (req, res) => {
    const users = await User.find()

    if (!users) {
        res.status(404)
        throw new Error('No Users Found!')
    }


    res.status(200).json(users)

}

const viewAllRatings = async (req, res) => {

    const ratings = await Rating.find().populate('user').populate('meal')

    if (!ratings) {
        res.status(404)
        throw new Error('Ratings Not Found!!')
    }

    res.status(200).json(ratings)

}

const viewAllOrders = async (req, res) => {

    const orders = await Order.find().populate('user').populate('meal')

    if (!orders) {
        res.status(404)
        throw new Error('Orders Not Found!')
    }

    res.status(200).json(orders)

}

const updateOrder = async (req, res) => {

    const orderExist = await Order.findById(req.params.oid)

    if (!orderExist) {
        res.status(404)
        throw new Error('Order Not Found')
    }

    const updatedOrder = await Order.findByIdAndUpdate(req.params.oid, req.body, { new: true })

    res.status(200).json(updatedOrder)

}


module.exports = { addMeal, updateMeal, removeMeal, viewAllOrders, viewAllRatings, viewAllUsers, updateOrder }