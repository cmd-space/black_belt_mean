var mongoose = require('mongoose');
var AppointmentSchema = new mongoose.Schema({
    date: String,
    time: String,
    complain: String,
    name: String,
    cust_id: String
});

mongoose.model('Appointment', AppointmentSchema);