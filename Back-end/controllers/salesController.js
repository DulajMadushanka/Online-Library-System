const express = require('express');
const router = express.Router();
const SalesItem = require('../models/salesItem');
const Customer = require('../models/customer')


//retrieving items
router.get('/products',function(req,res,next){
    SalesItem.find(function(err,salesItem){
       
        res.json(salesItem);
        
    })
});

router.get('/products/:id',function(req,res){
    SalesItem.findById(req.params.id,function(err,item){
        
        if(!err){
           
            res.json(item);
           
          
        }
        else{
            console.log('Errormin retrieving item:'+JSON.stringify(err,undefined,2));

        }
    });
});

//add items
router.post('/product',function(req,res,next){
    let newItem = new SalesItem({
        product_id:req.body.product_id,
        product_name:req.body.product_name,
        quantity:req.body.quantity,
        weight:req.body.weight,
        price:req.body.price
    })
    console.log(newItem);
    newItem.save(function(err,item){
        if(err){
            res.json({msg:'Failed to add item'});     
        }
        else{
            res.json({msg:'Item added successfully'});
        }
    })
});

//delete item
router.delete('/product/:id',function(req,res,next){
   
   SalesItem.findByIdAndRemove(req.params.id,function(err,item){
    if(err){
        res.json({msg:'Failed to deleted item'});     
    }
    else{
        res.json({msg:'Item deleted successfully'});
    }
   })
});

//update item
router.put('/product/:id',function(req,res,next){
        var items ={
            product_id:req.body.product_id,
            product_name:req.body.product_name,
            quantity:req.body.quantity,
            weight:req.body.weight,
            price:req.body.price
        };
        SalesItem.findByIdAndUpdate(req.params.id,{$set:items},{new:true},function(err,item){
            if(err){
                res.json({msg:'Failed to update item'});     
            }
            else{
                res.json({msg:'Item updated successfully'});
            }
        });
    });


router.get('/customs',function(req,res,next){
    Customer.find(function(err,customer){
        res.json(customer);
    })
})

router.post('/custom',function(req,res,next){
    
    let newcustomer = Customer({
        customer_id:req.body.customer_id,
        customer_name:req.body.customer_name,
        mobile:req.body.mobile,
        address:req.body.address,
        email_address:req.body.email_address
    });
    
    newcustomer.save(function(err,custom){
        if(err){
            res.json({msg:'Failed to add item'});     
        }
        else{
            res.json({msg:'Item added successfully'});
        }
        
    });
});
router.delete('/custom/:id',function(req,res,next){
    Customer.findByIdAndRemove(req.params.id,function(err,custom){
        if(err){
            console.log('grgrgrg');
            res.json({msg:'Failed to delete Customer'});
        }
        else{
            res.json({msg:'Successfully Deleted Custom'});
        }
    })
});

router.put('/custom/:id',function(req,res,next){
    var customers = {
        customer_id:req.body.customer_id,
        customer_name:req.body.customer_name,
        mobile:req.body.mobile,
        address:req.body.address,
        email_address:req.body.email_address
    }
    Customer.findByIdAndUpdate(req.params.id,{$set:customers},{new:true},function(err,custom){
        if(err){
            console.log('dfgh');
            res.json({msg:'Error Updated'});
        }
        else{
            res.json({msg:'Successfully Updated'});
        }
    })

})


router.put('/item/:id',function(req,res,next){
    var items ={
        product_id:req.body.product_id,
        product_name:req.body.product_name,
        quantity:req.body.quantity,
        weight:req.body.weight,
        price:req.body.price
    };
    SalesItem.findByIdAndUpdate(req.params.id,{$set:items},{new:true},function(err,item){
        if(err){
            res.json({msg:'Failed to update item'});     
        }
        else{
            res.json({msg:'Item updated successfully'});
        }
    });
});



module.exports = router;
