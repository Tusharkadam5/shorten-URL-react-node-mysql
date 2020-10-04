/**
 * @auther Tushar Kadam <tushar1kdm@gmail.com>
 * @description we are using express.js framwork and created server here.
 * @port We are using port as 4000
 * @since 4 Oct 2020
 */
const express = require('express');
const route = express.Router();

// added controller here
let urlshorten = require('../controller/urlshorten.controller');

// insert full url add genrate 
route.post('/createurl', urlshorten.createShortUrl);

route.get('/getallurls', urlshorten.getAllUrls);

route.get('/updateclick/:shortId', urlshorten.updateClick);


module.exports = route;