require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());
app.use(cors({
    origin:"*",
}))

//Middleware to parse JSON 
app.use(express.json());

//Routes
const bookingFormRoutes = require('./routes/bookingform');
app.use('/api/booking', bookingFormRoutes);

module.exports=app;