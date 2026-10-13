
const express = require('express');
require('dotenv').config();
const path = require('path');
const colors = require('colors');

const connectDB = require('./config/dbConfig');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 5000;

// Database connection
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/meal', require('./routes/mealRoute'));
app.use('/api/order', require('./routes/orderRoutes'));
app.use('/api/rating', require('./routes/ratingsRoutes'));

// Serve React frontend in production
if (process.env.NODE_ENV === 'production') {
    const frontendPath = path.resolve(__dirname, '..', 'client', 'dist');

    app.use(express.static(frontendPath));

    // React Router fallback
    app.get(/.*/, (req, res, next) => {
        // Do not serve React for unknown API endpoints
        if (req.path.startsWith('/api/')) {
            return next();
        }

        res.sendFile(path.join(frontendPath, 'index.html'));
    });
} else {
    app.get('/', (req, res) => {
        res.send('API is running... (development mode)');
    });
}

// Error handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING AT PORT: ${PORT}`.bgBlue.black);
});
