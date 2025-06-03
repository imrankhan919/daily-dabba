const express = require('express')
const { addRating, getRatings } = require('../controllers/ratingController')
const router = express.Router()

router.post("/:mid", addRating)
router.get("/:mid", getRatings)


module.exports = router