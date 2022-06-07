const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const apiRoute = require('./routes/apiRoute')

app.use(cors())
const connectDB = require('./config/dbConnection')
connectDB()

app.use(express.json())
app.use('/api',apiRoute)

app.listen(5000, ()=> {
    console.log('Server is Running on Port 5000')
})