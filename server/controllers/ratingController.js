const Meal = require("../models/mealModel")
const Rating = require("../models/ratingModel")
const userModel = require("../models/userModel")
const User = require("../models/userModel")

const addRating = async (req, res) => {

    const { text, rating } = req.body

    // Fill All Details
    if (!text || !rating) {
        res.status(401)
        throw new Error('Please Fill All Details!')
    }

    // Find User
    const user = await User.findById(req.user._id)
    if (!user) {
        res.status(404)
        res.json('User Not Found!')
    }

    // Find Meal
    const meal = await Meal.findById(req.params.mid)
    if (!meal) {
        res.status(404)
        res.json('Meal Not Found!')
    }



    const newRating = await Rating.create({ user: user._id, meal: meal._id, text, rating })

    if (!newRating) {
        res.status(400)
        throw new Error('Rating Not Created')
    }

    const ratingData = {
        _id: newRating.id,
        rating: newRating.rating,
        text: newRating.text,
        user: user,
        meal: meal,
        createdAt: newRating.createdAt
    }


    res.status(201).json(ratingData)

}

const getRatings = async (req, res) => {
    // Find Meal
    const meal = await Meal.findById(req.params.mid)
    if (!meal) {
        res.status(404)
        res.json('Meal Not Found!')
    }

    const ratings = await Rating.find({ meal: req.params.mid }).populate('meal').populate('user')

    if (!ratings) {
        res.status(404)
        throw new Error('Ratings Not Found!')
    }

    res.status(200).json(ratings)

}

module.exports = { addRating, getRatings }