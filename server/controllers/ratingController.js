const addRating = async (req, res) => {
    res.send('Rating Added')
}

const getRatings = async (req, res) => {
    res.send('All Ratings')
}

module.exports = { addRating, getRatings }