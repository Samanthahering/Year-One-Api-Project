const express = require('express');
//starts the server
const app = express();
//allows us to search for file paths
const path = require('path');
//port
const port = process.env.PORT || 8000;
//logger to help with debugging
const morgan = require('morgan');
//parser
const bodyParser = require('body-parser');
//db
const db = require('./db/db')

app.use(morgan('dev'));

//static middleware - don't change when we send it to the user (public folder that holds js, css and images)
app.use(express.static(path.join(__dirname, '../public')));

//all routes begin with /api
app.use('/api', require('./api'));

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//sending the index.html
app.get('*', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  });

//500 error
app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });
 
  // app.listen(port, function () {
  //   console.log(`Your server, listening on port ${port}`);
  // });

db.sync()
  .then(function(){
    app.listen(port)
    console.log(`Your server, listening on port ${port}`);
  })