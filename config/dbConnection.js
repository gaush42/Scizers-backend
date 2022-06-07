require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {
    // Database connection 🥳
    mongoose.connect("mongodb+srv://admin:admin@derpface-cluster.sljpl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",);
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('Database connected 🥳🥳🥳🥳');
    })
}

module.exports = connectDB;