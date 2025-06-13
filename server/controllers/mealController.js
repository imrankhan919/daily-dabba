const Meal = require("../models/mealModel")


const getMeals = async (req, res) => {

    const meals = await Meal.find()

    if (!meals) {
        res.status(404)
        throw new Error('Meals Not Found')
    }

    res.status(200).json(meals)

}
const getMeal = async (req, res) => {
    const meal = await Meal.findById(req.params.mid)

    if (!meal) {
        res.status(404)
        throw new Error('Meal Not Found')
    }

    res.status(200).json(meal)

}


module.exports = { getMeals, getMeal }