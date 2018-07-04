const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var Item = require('../models/productItem');

router.get('/', (req, res) => {
   Item.find((err, docs) => {
      if(!err){
         res.send(docs);
      }
      else{
         console.log('Error in Retriving items :' + JSON.stringify(err, undefined, 2));
      }
   });
});

router.get('/:id', (req, res) => {
   if(!ObjectId.isValid(req.params.id)){
      return res.status(400).send('No record with given id : ${req.params.id} ');
   }
   Item.findById(req.params.id, (err, docs) =>{
      if(!err){
         res.send(docs);
      }
      else{
         console.log('Error in Retriving Employees By ID :' + JSON.stringify(err, undefined, 2));
      }
   });
});

router.post('/', (req, res) => {
   var item = new Item ({
      
      itemname: req.body.itemname,
      itemCode: req.body.itemCode,
      category: req.body.category,
      quantity: req.body.quantity,
      description: req.body.description,
      unitCost: req.body.unitCost,
      latestUpdate: req.body.latestUpdate,
      unitScale: req.body.unitScale,
      minimumLevel: req.body.minimumLevel,
      reOrderLevel: req.body.reOrderLevel,
      maximumLevel: req.body.maximumLevel,
      date: req.body.date
   });
   item.save((err, docs) => {
      if(!err){
         res.send(docs);
      }
      else{
         console.log('Error in Saving Items :' + JSON.stringify(err, undefined, 2));
      }
   })
});

router.put('/:id', (req, res) => {
   if(!ObjectId.isValid(req.params.id)){
      return res.status(400).send('No record with given id : ${req.params.id} ');
   }
   var item = {
      
      itemname: req.body.itemname,
      itemCode: req.body.itemCode,
      category: req.body.category,
      quantity: req.body.quantity,
      description: req.body.description,
      unitCost: req.body.unitCost,
      latestUpdate: req.body.latestUpdate,
      unitScale: req.body.unitScale,
      minimumLevel: req.body.minimumLevel,
      reOrderLevel: req.body.reOrderLevel,
      maximumLevel: req.body.maximumLevel,
      date: req.body.date
   }
   Item.findByIdAndUpdate(req.params.id, { $set: item }, { new: true }, ( err, docs ) => {
      if(!err){
         res.send(docs);
      }
      else{
         console.log('Error in Updating ItemDetails :' + JSON.stringify(err, undefined, 2));
      }
   });
});

router.delete('/:id', (req, res) => {
   if(!ObjectId.isValid(req.params.id)){
      return res.status(400).send('No record with given id : ${req.params.id} ');
   }
   Item.findByIdAndRemove(req.params.id, (err, docs) =>{
      if(!err){
         res.send(docs);
      }
      else{
         console.log('Error in Deleting Items :' + JSON.stringify(err, undefined, 2));
      }
   })
})
module.exports = router;