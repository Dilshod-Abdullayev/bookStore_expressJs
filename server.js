const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // MongoDB ulanish funksiyasi
const bookRoutes = require('./routes/books'); // Marshrutlarni import qilish
const bodyParserMiddleware = require('./middlewares/bodyParserMiddleware');
const errorMiddleware = require('./middlewares/errorMiddleware');
const logMiddleware = require('./middlewares/logMiddleware');
dotenv.config();

const app = express();
connectDB();

app.use(logMiddleware);
app.use(bodyParserMiddleware);
app.use(errorMiddleware);

app.use(express.json());
app.use('/api/books', bookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server ${PORT} portida ishlayapti`);
});