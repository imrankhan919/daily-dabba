const express = require('express')
require('dotenv').config()
const path = require('path')
const colors = require('colors')
const connectDB = require('./config/dbConfig')
const errorHandler = require('./middleware/errorHandler')

const app = express()
const PORT = process.env.PORT || 3000

// DB CONNECTION
connectDB()

// Body-Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



// Default Route
if (process.env.NODE_ENV === "production") {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, "/client/dist")));

    app.get("/", (req, res) =>
        res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"))
    );
} else {
    app.get("/", (req, res) => {
        res.send("API is running... (development mode)");
    });
}

// Auth Routes
app.use('/api/auth', require("./routes/authRoutes"))

// Admin Routes
app.use("/api/admin", require("./routes/adminRoutes"))

// Meal Routes
app.use("/api/meal", require("./routes/mealRoute"))

// Order Routes
app.use("/api/order", require("./routes/orderRoutes"))

// Rating Route
app.use("/api/rating", require("./routes/ratingsRoutes"))

// Error Handler
app.use(errorHandler)

app.listen(PORT, () => console.log(`SERVER IS RUNNING AT PORT : ${PORT}`.bgBlue.black))