const mongoose= require('mongoose');
const ImSchema= mongoose.Schema({
//product table eke fk - check how to apply for this.
    productName:{
        type:String,
        required:true,
    },
    recipieCode:{
        type:String,
        required:true,      
    },
    ingredient:{
        type:String,
        required:true,
    },
    cost:{
        type:Number,
        required:true,
    },
    


});
const Recipie=module.exports=mongoose.model('Recipie',ImSchema);