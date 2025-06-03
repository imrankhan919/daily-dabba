const addMeal = async (req, res) => {
    res.send('Meal Added!!')
}

const updateMeal = async (req, res) => {
    res.send('Meal Updated!!')
}

const removeMeal = async (req, res) => {
    res.send('Meal Removed!!')
}

const viewAllUsers = async (req, res) => {
    res.send('All Users')
}

const viewAllRatings = async (req, res) => {
    res.send('All Ratings')
}

const viewAllOrders = async (req, res) => {
    res.send('All Orders')
}

const updateOrder = async (req, res) => {
    res.send('Order Updated')
}


module.exports = { addMeal, updateMeal, removeMeal, viewAllOrders, viewAllRatings, viewAllUsers, updateOrder }