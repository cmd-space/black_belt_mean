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
            // find out how to limit to 3 per day
            // Appointment.find({date: req.body.date});
            var newAppt = new Appointment({date: req.body.date, time: req.body.time, complain: req.body.complain, name: req.body.name, cust_id: req.body.cust_id});
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
                    });
                }
            });
        },
        destroy: function(req, res){
            Appointment.find({_id: req.body.id})
        }
    }
})();