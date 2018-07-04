const mongoose= require('mongoose');

const ImSchema= mongoose.Schema({
    itemname:{
        type:String,
    },
    itemCode:{
        type:String,      
    },
    category: {
        type: String
    },
    quantity:{
        type:Number,
    },
    description:{
        type:String,
    },
    unitCost:{

        type:Number,         
    },
    
    latestUpdate:{
        type:Date,
        
    },
    unitScale:{
        type:String,          
    },
    minimumLevel: { 
        type: Number 
    },
    reOrderLevel:{ 
        type: Number 
    },
    maximumLevel: {
         type: Number 
    },
    date: {

        type: Date
    }


});
const Item=module.exports=mongoose.model('Item',ImSchema);