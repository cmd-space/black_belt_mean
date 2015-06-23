var mongoose = require('mongoose');
var Appointment = mongoose.model('Appointment');

module.exports = (function(){
    return{
        show: function(req, res){
            Appointment.find({}, function(err, results){
                if(err){
                    console.log(err);
                } else{
                    res.json(results);
                }
            })
        },
        add: function(req, res){
            var newAppt = new Appointment({date: req.body.date, time: req.body.time, name: req.body.name, complain: req.body.complain, cust_id: req.body.cust_id});
            newAppt.save(function(err, results){
                if(err){
                    console.log(err);
                } else{
                    Appointment.find({}, function(err, results){
                        if(err){
                            console.log(err);
                        } else{
                            res.json(results);
                        }
                    })
                }
            })
        }
    }
})();