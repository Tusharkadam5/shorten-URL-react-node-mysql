
/**
 * @auther Tushar Kadam <tushar1kdm@gmail.com>
 * @description we are using express.js framwork and created server here.
 * @port We are using port as 4000
 * @since 4 Oct 2020
 */

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
require('path');
const expressip = require('express-ip'); 
require('mysql');
require('./database/db');
   
// Added route file here
const urlShortenRoute = require('./routes/urlshorten.route');

app.use(expressip().getIpInfoMiddleware);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: false
}));
app.use(cors());
//app.use(express.static(path.join(__dirname, '../build/index.html')));
// app.use('/', express.static(path.join(__dirname, '../build/index.html')));
app.use('/api', urlShortenRoute)

// Create port
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('Connected to port ' + port)
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message); // Log error message in our server's console
  if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
  res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
});
