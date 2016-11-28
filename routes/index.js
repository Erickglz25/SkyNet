var express = require('express');
var router = express.Router();
//var Product = require('../models/Product.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SkyNet',condition:true});
});

router.get('/register', function(req, res) {
  res.render('register', { title: 'SkyNet',condition:true});
});

router.post('/',function(req,res){

	/*Comprobar e la base de datos*/

})


router.post('/register', function(req, res) {
	console.log(req.body);
	var usuario = new Usuario({
		name: req.body.name,
		LastName: req.body.LastName,
		email: req.body.email,
		username: req.body.username,
		password: req.body.password
	});
	

	usuario.save(function(error, product) {
		if(error) {
			res.send(500, error.message);
		}

		Usuario.find(function(error, UsuarioList) {

			if(error) {
				res.send(500, error.message);
			}

			res.render('usuarios', {
				title: 'USUARIOS',
				products: UsuariosList
			});


		});
	});


});



module.exports = router;


/*

	
*/