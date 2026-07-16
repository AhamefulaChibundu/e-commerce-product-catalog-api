const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');
const logRequest = require('./middlewares/logger');
const connectDB = require('./database/db');
const productRoutes = require('./routes/product.routes');


app.use(express.json());
app.use(cors({
    origin: "*"
}));

// Precious: Uncomment line 17 after logger middleware is implemented
app.use(logRequest);

connectDB();

// when you add your route on product.routes.js:
//
// Uncomment  line 27 ONLY while testing your routes.
// Before pushing your code, comment it again so you
// don't overwrite another member's changes.

// app.use('/api', productRoutes)


// Precious Uncomment line 31 after error handler is implemented
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server is listening at port ${PORT}`)
})