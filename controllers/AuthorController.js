const AuthorModel = require('../model/Author')
const BookModel = require('../model/Book')

const authorController = {
  addAuthor: async (req,res) => {
    try {
        const newAuthor = new AuthorModel(req.body)
        const saveAuthor = await newAuthor.save()
        res.status(200).json(saveAuthor)
    } catch (error) {
        res.status(500).json(error)
    }
  },
  getAllAuthor: async (req,res) => {
    try {
       const response = await AuthorModel.find()
       const listAuthor = {
        data:response
    }
       res.status(200).json(listAuthor) 
    } catch (error) {
        res.status(500).json(error)
    }
  },
  getAuthorById: async (req,res) => {
    try {
       const response = await AuthorModel.findById(req.params.id).populate("books") 
       res.status(200).json(response)
    } catch (error) {
       res.status(500).json(error)
    }
  },
  updateAuthor: async (req,res) => {
    try {
        const author = AuthorModel.findById(req.params.id)
        await author.updateOne({$set:req.body})
        res.status(200).json('Updated successfuly')
    } catch (error) {
        res.status(500).json(error)
    }
  },
  deleteAuthor: async (req,res) => {
    try {
        await BookModel.updateMany({author:req.params.id},{author:null})
        await AuthorModel.findByIdAndDelete(req.params.id)
        res.status(200).json('Deleted successfully')
    } catch (error) {
        res.status(500).json(error)
    }
  }
}

module.exports = authorController