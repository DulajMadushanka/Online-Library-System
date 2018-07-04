const mongoose = require('mongoose');
const massageSchema = mongoose.Schema({
    student_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    note:{
        type:String,
        required:true
    }
})
const Massage = module.exports = mongoose.model('Massage',massageSchema);