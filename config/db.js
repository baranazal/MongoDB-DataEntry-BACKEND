const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

const uri = process.env.MONGO_URI;
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(uri);

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDB;