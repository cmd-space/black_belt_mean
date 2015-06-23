var appointments = require('./../server/controllers/appointments.js');
var patients = require('./../server/controllers/patients.js');

module.exports = function(app){
    app.get('/patients', function(req, res){
        patients.show(req, res); 
    });
    app.get('/appointments', function(req, res){
        appointments.show(req, res);   
    });
    app.post('/add_patient', function(req, res){
        console.log('came here');
        patients.add(req, res);
    });
    app.post('/add_appt', function(req, res){
        appointments.add(req, res);
    });
}