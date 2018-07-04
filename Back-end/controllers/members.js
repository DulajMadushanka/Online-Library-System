const express = require('express');
const router = express.Router();
const Member = require('../models/member');

router.get('/members',function(req,res,next){
    Member.find(function(err,members){
        res.json(members);
    });
});

router.post('/member',function(req,res,next){
    let newMember = new Member({
        name:req.body.name,
        email:req.body.email,
        id_no:req.body.id_no,
        mobile_no:req.body.mobile_no,
        address:req.body.address,
        birthday:req.body.birthday,
        status:req.body.status,
       
    });
    newMember.save(function(err,members){
        if(err){
            res.json({msg:'Failed to add member'})
        }
        else{
            res.json({msg:'Member added successfully'})
        }
    });
});

router.delete('/member/:id',function(req,res,next){
    Member.findByIdAndRemove(req.params.id,function(err,members){
        if(err){
            res.json({msg:'Failed to deleted member'});
        }
        else{
            res.json({msg:'member deleted successfully'});
        }
    });
});

router.put('/member/:id',function(req,res,next){
    var member ={
        name:req.body.name,
        email:req.body.email,
        id_no:req.body.id_no,
        mobile_no:req.body.mobile_no,
        address:req.body.address,
        birthday:req.body.birthday,
        status:req.body.status,
    }
    Member.findByIdAndUpdate(req.params.id,{$set:member},{new:true},function(err,members){
        if(err){
            res.json({msg:'Failed to update member'});
        }
        else{
            res.json({msg:'Member updated successfully'})
        }
    });
});


module.exports = router;