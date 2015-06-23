var mongoose = require('mongoose');
var Patient = mongoose.model('Patient');

module.exports = (function(){
    return{
        show: function(req, res){
            Patient.find({}, function(err, results){
                if(err){
                    console.log(err);
                } else{
                    res.json(results);
                }
            });
        },
        add: function(req, res){
            var newPatient = new Patient({name: req.body.name});
            console.log(req.body.name);
            newPatient.save(function(err, results){
                if(err){
                    console.log(err);
                } else{
                    Patient.find({name: req.body.name}, function(err, results){
                        if(err){
                            console.log(err);
                        } else{
                            console.log(results);
                            res.json(results);
                        }
                    });
                }
            });
        }
    }
})();