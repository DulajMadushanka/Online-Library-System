const express = require('express');
const router = express.Router();
const Book = require('../models/book_add');

router.get('/books',function(req,res,next){
    Book.find(function(err,books){
        res.json(books);
    });
});

router.post('/book',function(req,res,next){
    let newBook = new Book({
        isbn_no:req.body.isbn_no,
        book_name:req.body.book_name,
        title:req.body.title,
        subtitle:req.body.subtitle,
        author:req.body.author,
        edition:req.body.edition,
        year_of_edition:req.body.year_of_edition,
        total_books:req.body.total_books,
        price:req.body.price
    });


    console.log(newBook);
    newBook.save(function(err,books){
        if(err){
            res.json({msg:'Failed to add book'})
        }
        else{
            res.json({msg:'Book added successfully'})
        }
    });
});

router.delete('/book/:id',function(req,res,next){
    Book.findByIdAndRemove(req.params.id,function(err,books){
        if(err){
            res.json({msg:'Failed to deleted books'});
        }
        else{
            res.json({msg:'Book deleted successfully'});
        }
    });
});

router.put('/book/:id',function(req,res,next){
    var book ={
        isbn_no:req.body.isbn_no,
        book_name:req.body.book_name,
        title:req.body.title,
        subtitle:req.body.subtitle,
        author:req.body.author,
        edition:req.body.edition,
        year_of_edition:req.body.year_of_edition,
        total_books:req.body.total_books,
        price:req.body.price
    }
    Book.findByIdAndUpdate(req.params.id,{$set:book},{new:true},function(err,books){
        if(err){
            res.json({msg:'Failed to update book'});
        }
        else{
            res.json({msg:'Book updated successfully'})
        }
    });
});


module.exports = router;