var mongoose = require('mongoose');
var PatientSchema = new mongoose.Schema({
    name: String
});

mongoose.model('Patient', PatientSchema);