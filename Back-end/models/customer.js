const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    customer_id:{
        type:String,
        require:true,
    },
    customer_name:{
        type:String,
        require:true
    },
    mobile:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    email_address:{
        type:String,
        require:true
    }

});

const Customer = module.exports = mongoose.model('Customer',customerSchema);
