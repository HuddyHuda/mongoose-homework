// import express
var express = require('express')
var bodyParser = require('body-parser')
var bookroutes = require('./routes/books')
var mongoose = require('mongoose')

// instantiating the express server
var app = express()
var port = 4000

// connects to our mongo database
mongoose.connect('mongodb://localhost/bookslist')
mongoose.Promise = global.Promise

app.set('view engine', 'ejs')


app.use(function (req, res, next) {
  console.log('new req method is: ' + req.method, 'new req url is: ' + req.url)
  next()
})

app.use(bodyParser.urlencoded({ extended: true }))

// run methodOverride for all requests
// app.use(methodOverride(function (req, res) {
//   if (req.body && typeof req.body === 'object' && '_method' in req.body) {
//     // look in urlencoded POST bodies and delete it
//     var method = req.body._method
//     delete req.body._method
//     return method
//   }
// }))

// the view engine for express is ejs. HENCE, res.render(index) => index.ejs inside VIEWS FOLDER
app.set('view engine', 'ejs')

// add middleware to handle all user routes
app.use('/books', bookroutes)


// listening to the opened port
app.listen(port)
console.log('Server running at http://localhost:' + port + '/')
