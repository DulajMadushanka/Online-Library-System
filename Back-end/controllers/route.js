var express=require('express');

var router= express.Router();

const Item=require('../models/productItem');


//retrieving data from database
router.get('/items',function(req,res,next){
    Item.find(function (err,items) {
        if (err) {
            res.json(err);
        }
        else {
                res.json(items);
        }

    });
});

//retieving data using itemCode

router.get('/item/:itemCode', (req, res, next) => {
    Item.find({ itemCode: req.params.itemCode }, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
});

    //inserting data
    router.post('/item',function(req,res,next){
       let newproduct=new Item({
           itemname:req.body.itemname,
           quantity:req.body.quantity,
           description:req.body.description,
           itemCode:req.body.itemCode,
           unitCost:req.body.unitCost, 
           unitScale:req.body.unitScale,          

       });
        newproduct.save(function (err,item) {
            if (err) {
                res.json(err);
            }
            else {
                res.json({msg:'item added succesfully'});
            }

        });

        });


    //updating data

router.put('/item/:id',(req,res,next) =>{
    Item.findOneAndUpdate({_id:req.params.id},{
        $set:{
            itemname:req.body.itemname,
            quantity:req.body.quantity,
            description:req.body.description,
            //thama me fields edit karanna deela nathi nisa hriyta balala fix karanna one
            itemCode:req.body.itemCode,
            unitCost:req.body.unitCost, 
            latestUpdate:req.body.latestUpdate,
            //unitScale:req.body.unitScale,  
        }

    },function (err,result) {
        if (err){
            res.json(err);
        }
        else{
            res.json(result);
        }
        
    })
});
    //deleting data
router.delete('/item/:id',function(req,res,next) {
    Item.remove({_id:req.params.id},function (err,result) {
        if (err){
            res.json(err);
        }
        else{
            res.json(result);
        }

    })
});

module.exports=router;