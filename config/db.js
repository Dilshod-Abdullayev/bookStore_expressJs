const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`MongoDBga ulanish muvaffaqiyatli: ${conn.connection.host}`);
    } catch (error) {
        console.error(`MongoDBga ulanishda xato: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;