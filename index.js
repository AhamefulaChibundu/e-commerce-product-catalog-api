const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

const errorHandler = require('./middlewares/errorHandler');
const logRequest = require('./middlewares/logger');
const connectDB = require('./database/db');
const productRoutes = require('./routes/product.routes');

app.use(express.json());

app.use(cors({
    origin: "*"
}));

app.use(logRequest);

connectDB();

app.use('/api', productRoutes);

app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});