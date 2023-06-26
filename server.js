const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const helmet = require('helmet');

connectDB();

dotenv.config({ path: './config/config.env' });

// Routes
const form = require('./routes/form');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/* Security */

// 1. Data Sanitization against NoSQL query injection
app.use(mongoSanitize());

// 2. Data Sanitization against XSS
app.use(xss());

// 3. Enable CORS
app.use(cors());

// 4. Set security HTTP headers
// app.use(helmet());

// 5. Prevent http param pollution
app.use(hpp());

// Mount routers
app.use('/api/v1/form', form);

const PORT = process.env.PORT;

const server = app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // Close server & exit process
    server.close(() => process.exit(1));
});