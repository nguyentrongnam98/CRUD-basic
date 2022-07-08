const mongoose = require('mongoose');

const Author = new mongoose.Schema({
    name:{
        type:String
    },
    year:{
        type:Number
    },
    books:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Book'
        }
    ]
})
const AuthorModel = mongoose.model('Author',Author)
module.exports = AuthorModel 