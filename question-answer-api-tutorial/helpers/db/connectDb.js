const mongoose = require('mongoose');
const connectDb = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser:true,
        })
    .then(() => console.log('Connected to MongoDB...')).catch(err => console.log(err));
}

module.exports = connectDb;