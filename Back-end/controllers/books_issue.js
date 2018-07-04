const express = require('express');
const router = express.Router();
const B_issue = require('../models/book_issue');

router.get('/issues',function(req,res,next){
    B_issue.find(function(err,issue){
        res.json(issue);
    });
});

router.post('/issue',function(req,res,next){
    let newB_issue = new B_issue({
        s_name:req.body.s_name,
        email:req.body.email,
        book_name:req.body.book_name,
        isbn:req.body.isbn,
        b_date:req.body.b_date,
        r_date:req.body.r_date,
        note:req.body.note,
        fine:req.body.fine
       
    });
    console.log(newB_issue);
    newB_issue.save(function(err,issue){
        if(err){
            res.json({msg:'Failed to add issue book'})
        }
        else{
            res.json({msg:'Book issue added successfully'})
        }
    });
});

router.delete('/issue/:id',function(req,res,next){
    B_issue.findByIdAndRemove(req.params.id,function(err,issue){
        if(err){
            res.json({msg:'Failed to deleted issue book'});
        }
        else{
            res.json({msg:'Book issue deleted successfully'});
        }
    });
});

router.put('/issue/:id',function(req,res,next){
    var b_issue ={
        s_name:req.body.s_name,
        email:req.body.email,
        book_name:req.body.book_name,
        isbn:req.body.isbn,
        b_date:req.body.b_date,
        r_date:req.body.r_date,
        note:req.body.note,
        fine:req.body.fine
    }
    B_issue.findByIdAndUpdate(req.params.id,{$set:b_issue},{new:true},function(err,issue){
        if(err){
            res.json({msg:'Failed to update issue book'});
        }
        else{
            res.json({msg:'Book issue updated successfully'})
        }
    });
});


module.exports = router;