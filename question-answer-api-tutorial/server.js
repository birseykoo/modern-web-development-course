const express = require('express');
const dotenv = require('dotenv');
const question = require('./routers/question');
const auth = require('./routers/auth');
const routers = require('./routers/index');
const connectDb = require('./helpers/db/connectDb')
const costumErrorHandler = require('./middlewares/error/costumErrorHandler');
const path = require('path');
// Environment variables
dotenv.config({
    path: './config/env/config.env'
});

// MongoDb connection
connectDb();

// Initialize express
const app = express();
// Express - Body Middleware
app.use(express.json());
const PORT = process.env.PORT;

// Route Middleware
app.use('/api', routers)

// Error
app.use(costumErrorHandler);
// app.use((err,req, res, next) => {
//     console.log("err.message");
//     res.status(400).json({
//         success: false,
//     });
// });

// Static File
app.use (express.static(path.join(__dirname, 'public')));
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}: ${process.env.NODE_ENV}`);
});

