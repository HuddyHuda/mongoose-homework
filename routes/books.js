var express = require ('express')
var router = express.Router()
var bodyParser = require('body-parser')
var assert = require('assert')
var mongoose = require('mongoose')

var db = ('mongodb://localhost/bookslist')


var Book = require ('../models/books')

// setting the route to homepage
// app.get('/path-name', callback(request, response)) NO
// use router.get instead

// READ ROUTES

// All the GET requests

var newBook;
//create function
    router.post('/', function (req, res, next) {

      var newBook = new Book(
        {
        Title: 'Red Riding Hood',
        Genre: 'Fairytale',
        Author: {
      Name: 'Steve Jobs',
      Publisher: 'Puffin Books'
    }
})
      newBook.save(function (err) {
        if (err) throw new Error(err)
      })
      res.send(newBook)
      console.log(newBook)

      Book.create({ Title: 'Blue Riding Hood',
        Genre: 'Fairytale',
        Author: {
      Name: 'Steve Lain',
      Publisher: 'Juffin Books'
    } }, function(err, user) {
  if (err) return console.log(err);
  console.log(user);
});

      next()

    // res.send('posted username is ' + posted_username + ' and posted password is: ' + posted_password)
    })




    router.get('/findall', function (req, res, next) {
    Book.find({}, function(err, books) {
if (err) return res.send(err);
console.log(books);
});
})




router.get('/new', function (req, res) {

  // NEW route under NEW.EJS
  res.render('books/new')
}).get('/:id', function (req, res) {
    res.send(newBook)
}).get('/:id/edit', function (req, res) {
  res.render('books/index', {
    'message': 'form subbmitted'

  })
// res.send('edit user\'s ' + req.params.id + ' details')
})



// only PUT request
router.put('/:id', function (req, res) {
  res.send('SHOULDVE GONE HERE')
})

// DELETE ROUTES
router.delete('/:id', function (req, res) {
  res.send('delete user' + req.params.id)
})

module.exports = router
