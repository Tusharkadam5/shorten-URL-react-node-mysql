

/**
 * @auther Tushar Kadam <tushar1kdm@gmail.com>
 * @description This is contrallor file .
 * @since 4 Oct 2020
 */
const connection = require('../database/db');
var validUrl = require('valid-url');


/**
 * @function createShortUrl Inserting data as full Url and genrate short url 
 * @since 4 Oct 2020
 */
exports.createShortUrl = (req, res) => {
    const ipInfo = req.ipInfo;
    let data = {};
    if ( validUrl.isUri(req.body.fullurl)) {
    let short = makeid(5);
    if(ipInfo.country) {
        data = {fullurl: req.body.fullurl, shorturl: short, country: ipInfo.country, ipaddress:ipInfo.ip}; 
    }else {
        data = {fullurl: req.body.fullurl, shorturl: short, country: 'india', ipaddress:ipInfo.ip}; 
    }
    console.log(ipInfo);

    let sql = "INSERT INTO urlstable SET ?";
    connection.query(sql, data,(err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });

    } else {
        res.send(JSON.stringify({"status": 200, "error": 'Url is not valid', "response": null}));
    }
  };

/**
 * @function getAllUrls get all data from mysql table of urlstable
 * @since 4 Oct 2020
 */
  exports.getAllUrls = (req, res) => {
    let sql = "SELECT * FROM urlstable";
    connection.query(sql, (err, results)=> {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}))
    })
  }

/**
 * @function makeid It is genrate random 5 char 
 * @since 4 Oct 2020
 */
  function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
