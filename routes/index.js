var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SkyNet',condition:true});
});

router.get('/register', function(req, res) {
  res.render('register', { title: 'SkyNet',condition:true});
});




module.exports = router;
