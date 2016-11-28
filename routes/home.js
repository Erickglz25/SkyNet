var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('home', { title: 'SkyNet',condition:true});

  /*HACER UNA CONTACT LIST PARA CADA USUARIO*/

});

module.exports = router;