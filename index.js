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
const bandMemberRoutes = require('./routes/bandmember');
app.use('/api/booking', bookingFormRoutes);
app.use('/api/bandmembers',bandMemberRoutes);
app.get('/', (req, res) => {
  res.send('Raagsaaz backend server is Live!');
});

module.exports=app;