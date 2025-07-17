const Meal = require("../models/mealModel")
const Order = require("../models/orderModel")


const addOrder = async (req, res) => {
    // Find If Meal Exist
    const meal = await Meal.findById(req.params.mid)

    if (!meal) {
        res.status(400)
        throw new Error('Invalid Meal')
    }

    // Create Order

    const newOrder = await Order.create({
        user: req.user._id,
        meal: meal._id,
        status: 'pending'
    })


    if (!newOrder) {
        res.status(400)
        throw new Error('Order Not Created!!')
    }

    res.status(201).json(newOrder)

}

const updateOrder = async (req, res) => {

    const orderExist = await Order.findById(req.params.oid)

    if (orderExist.status === "delivered") {
        res.status(400)
        throw new Error('Order Cannot Be Cancelled After Delivery!')
    }


    const updatedOrder = await Order.findByIdAndUpdate(req.params.oid, { status: 'cancelled' }, { new: true })

    res.status(200).json(updatedOrder)

}

const getOrder = async (req, res) => {

    const order = await Order.findById(req.params.oid).populate('user').populate('meal')

    if (!order) {
        res.status(404)
        throw new Error('Order not found!')
    }

    res.status(200).json(order)

}

const getMyOrders = async (req, res) => {
    const order = await Order.find({ user: req.user._id }).populate('user').populate('meal')

    if (!order) {
        res.status(404)
        throw new Error('Order not found!')
    }

    res.status(200).json(order)

}


module.exports = { addOrder, updateOrder, getOrder, getMyOrders }