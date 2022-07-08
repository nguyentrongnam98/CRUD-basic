const mongoose = require('mongoose');

const Book = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    publishedDate:{
        type:String
    },
    genres:{
        type:[String]
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Author'
    }
})

const BookModel = mongoose.model('Book',Book)

module.exports =  BookModel 