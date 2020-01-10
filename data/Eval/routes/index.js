var express = require('express');
var router = express.Router();
// const dbConnection = require('../dbConnection')


const dbConnection = function (callback) {
  MongoClient.connect(url, function (err, client) {
    if (err) {
      return
    }
    const db = client.db(dbName);
    callback(db);
    client.close();
  });
}
const findRegisters = function (db, callback) {
  db.collection('registers')
    .find({})
    .toArray(function (err, docs) {
      //console.log(docs)
      callback(docs)
    });
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Form' });
});


module.exports = router;
