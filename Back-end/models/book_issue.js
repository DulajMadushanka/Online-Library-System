const mongoose = require('mongoose');
const b_issueSchema = mongoose.Schema({
    s_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    book_name:{
        type:String,
        required:true
    },
    isbn:{
        type:String,
        required:true
    },
    b_date:{
        type:String,
        required:true
    },
    r_date:{
        type:String,
        required:true
    },
    note:{
        type:String,
        required:true
    },
    fine:{
        type:String,
        required:true
    }
})
const B_issue = module.exports = mongoose.model('B_issue',b_issueSchema);