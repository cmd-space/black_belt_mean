var mongoose = require('mongoose');
var AppointmentSchema = new mongoose.Schema({
    date: String,
    time: String,
    name: String,
    complain: String,
    cust_id: String
});

mongoose.model('Appointment', AppointmentSchema);