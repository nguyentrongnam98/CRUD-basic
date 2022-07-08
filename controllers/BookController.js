const AuthorModel = require("../model/Author");
const BookModel = require("../model/Book");

const bookController = {
  addBook: async (req, res) => {
    try {
      const book = new BookModel(req.body);
      const response = await book.save();
      if (req.body.author) {
        const author = AuthorModel.findById(req.body.author)
        await author.updateOne({$push:{books:response._id}})
      }
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAllBook: async (req,res) => {
    try {
        const allBook = await BookModel.find()
        const response = {
            data:allBook
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
  },
  getBookById: async (req,res) => {
    try {
       const response = await BookModel.findById(req.params.id) 
       res.status(200).json(response)
    } catch (error) {
       res.status(500).json(error)
    }
  },
  updateBook: async (req,res) => {
    try {
        const book = BookModel.findById(req.params.id)
        await book.updateOne({$set:req.body})
        res.status(200).json('Updated successfuly !')
    } catch (error) {
        res.status(200).json(error)
    }
  },
  deleteBook: async (req,res) => {
    try {
        await AuthorModel.updateMany({books:req.params.id},{$pull:{books:req.params.id}})
        await BookModel.findByIdAndDelete(req.params.id)
        res.status(200).json('Deleted successfully')
    } catch (error) {
        res.status(500).json(error)
    }
  }
};

module.exports = bookController;
