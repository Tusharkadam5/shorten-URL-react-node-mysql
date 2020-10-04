'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'shortendb'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Mysql Connected...');
});

module.exports = connection;