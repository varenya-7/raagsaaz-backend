const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventoccasion : {type : String , required : true},
    eventdatetime : {type : Date , required : true},
    nameofcontactperson : {type : String , required : true},
    email : {type : String , required : true , unique : true},
    phonenumber : {type : String , required : true},
    additionalinfo : {type : String },
}, { collection: "raagsaaz"  , timestamps: true });

const BookingForm = mongoose.model('BookingForm', eventSchema);
module.exports = BookingForm;