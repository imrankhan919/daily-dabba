const express = require('express')
const { addRating, getRatings } = require('../controllers/ratingController')
const protect = require('../middleware/authMiddleware')
const router = express.Router()

router.post("/:mid", protect, addRating)
router.get("/:mid", protect, getRatings)


module.exports = router