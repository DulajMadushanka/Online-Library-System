const mongoose = require('mongoose');
const b_requestSchema = mongoose.Schema({
    s_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    book_title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    edition:{
        type:String,
        required:true
    },
    note:{
        type:String,
        required:true
    }
})
const B_request = module.exports = mongoose.model('B_request',b_requestSchema);