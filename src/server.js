const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// Initialize Express app
const app = express();

// Define CORS options
const corsOptions = {
    origin: 'http://localhost:3000', // your frontend URL
    optionsSuccessStatus: 200 // For legacy browser support
};

// Apply CORS middleware with the defined options
app.use(cors(corsOptions));

// Middleware
app.use(bodyParser.json());

// Use authentication routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
