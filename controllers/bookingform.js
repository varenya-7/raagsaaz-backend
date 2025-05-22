const BookingForm = require('../models/bookingform');

async function submitForm(req , res){
    try {
        console.log('Request received:', req.body);
        const response = await BookingForm.create(req.body);
        console.log('Response from database:', response);
        res.send('Form Details Stored' );
    } catch (error) {
        console.error('Error in submitForm:', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    submitForm
};