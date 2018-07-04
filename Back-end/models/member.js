const mongoose = require('mongoose');
const memberSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    id_no:{
        type:String,
        required:true
    },
    mobile_no:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    birthday:{
        type:String,
        required:true
    },

    status:{
        type:String,
        required:true
    },
   
})
const Member = module.exports = mongoose.model('Member',memberSchema);