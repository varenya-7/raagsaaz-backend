const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventoccasion : {type : String , required : true},
    eventdate : {type : Date , required : true},
    name : {type : String , required : true},
    email : {type : String , required : true , unique : true},
    phonenumber : {type : String , required : true},
    additionalinformation : {type : String },
}, { collection: "raagsaaz"  , timestamps: true });

const BookingForm = mongoose.model('BookingForm', eventSchema);
module.exports = BookingForm;