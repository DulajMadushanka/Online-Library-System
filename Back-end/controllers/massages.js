const express = require('express');
const router = express.Router();
const Massage = require('../models/massage');

router.get('/massages',function(req,res,next){
    Massage.find(function(err,massage){
        res.json(massage);
    });
});

router.post('/massage',function(req,res,next){
    let newMassage = new Massage({
        student_name:req.body.student_name,
        email:req.body.email,
        note:req.body.note
    });
    newMassage.save(function(err,massage){
        if(err){
            res.json({msg:'Failed to add massage'})
        }
        else{
            res.json({msg:'Massage added successfully'})
        }
    });
});

router.delete('/massage/:id',function(req,res,next){
    Massage.findByIdAndRemove(req.params.id,function(err,massage){
        if(err){
            res.json({msg:'Failed to deleted massage'});
        }
        else{
            res.json({msg:'massage deleted successfully'});
        }
    });
});




module.exports = router;