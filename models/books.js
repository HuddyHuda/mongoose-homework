//models always singular

var mongoose = require ('mongoose')

//create a schema for movie model - database structure
//database structure sync with database mongoose

var bookSchema = new mongoose.Schema({
  Name: String,
  Publisher: String
})


var authorSchema = new mongoose.Schema({
  Title: String,
  Genre: String,
  Author: [bookSchema]
})


var Author = mongoose.model('author', authorSchema)

var book1 = new Author({
  Title: 'Red Riding Hood',
  Genre: 'Fairytale',
  Author: {
Name: 'Steve Jobs',
Publisher: 'Puffin Books'
}
})


module.exports = Author;
