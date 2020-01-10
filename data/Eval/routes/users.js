var express = require('express');
var router = express.Router();
const dbConnection = require('../dbConnection')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Title' });
});

router.post('/', function (req, res, next) {
    
  dbConnection(function (db) {
      db.collection('users')
          .insertOne({
          register: req.body.message,
          user: {
              name: req.session.user.name,
              surname: req.session.user.surname,
              avatar: req.session.user.avatar,
          },
          
          });
      //réponse du serveur
      res.status(201).json({});
      });   
  });

module.exports = router;
