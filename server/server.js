const express = require('express')
require('dotenv').config()
const colors = require('colors')
const connectDB = require('./config/dbConfig')

const app = express()
const PORT = process.env.PORT || 3000

// DB CONNECTION
connectDB()

// Default Route
app.get("/", (req, res) => {
    res.json({
        msg: "WELCOME TO DAILY-DABBA API 1.0"
    })
})

// Auth Routes
app.use('/api/auth', require("./routes/authRoutes"))

// Admin Routes
app.use("/api/admin", require("./routes/adminRoutes"))

// Order Routes
app.use("/api/order", require("./routes/orderRoutes"))

// Rating Route
app.use("/api/rating", require("./routes/ratingsRoutes"))


app.listen(PORT, () => console.log(`SERVER IS RUNNING AT PORT : ${PORT}`.bgBlue.black))