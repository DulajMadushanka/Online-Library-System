const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
    isbn_no:{
        type:String,
        required:true
    },
    book_name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    subtitle:{
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
    year_of_edition:{
        type:String,
        required:true
    },
    total_books:{
        type:String,
        required:true 
    },
   
    price:{
        type:String,
        required:true
    }
})
const Book = module.exports = mongoose.model('Book',bookSchema);