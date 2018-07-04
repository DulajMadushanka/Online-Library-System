const express = require('express');
const router = express.Router();
const B_request = require('../models/book_request');

router.get('/requests',function(req,res,next){
    B_request.find(function(err,reque){
        res.json(reque);
    });
});

router.post('/request',function(req,res,next){
    let newB_request = new B_request({
        s_name:req.body.s_name,
        email:req.body.email,
        book_title:req.body.book_title,
        author:req.body.author,
        edition:req.body.edition,
        note:req.body.note
       
    });
    newB_request.save(function(err,reque){
        if(err){
            res.json({msg:'Failed to add book request'})
        }
        else{
            res.json({msg:'Book requst added successfully'})
        }
    });
});

router.delete('/request/:id',function(req,res,next){
    B_request.findByIdAndRemove(req.params.id,function(err,reque){
        if(err){
            res.json({msg:'Failed to deleted book request'});
        }
        else{
            res.json({msg:'Book requst deleted successfully'});
        }
    });
});

router.put('/request/:id',function(req,res,next){
    var b_request ={
        s_name:req.body.s_name,
        email:req.body.email,
        book_title:req.body.book_title,
        author:req.body.author,
        edition:req.body.edition,
        note:req.body.note
    }
    B_request.findByIdAndUpdate(req.params.id,{$set:b_request},{new:true},function(err,reque){
        if(err){
            res.json({msg:'Failed to update book request'});
        }
        else{
            res.json({msg:'Book request updated successfully'})
        }
    });
});


module.exports = router;