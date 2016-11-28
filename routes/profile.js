var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('profile', { title: 'SkyNet',condition:true});

  Product.find(function(error, productList) { //sustitur esta linea por la funcion equivalente sql select where id = xx

  	if(error) {
  		res.send(500, error.message);
  	}

  	res.render('profile', {
  		title: 'PRODUCTS',  	//SUSTITUIR LOS CAMPOS por el objeto  usuario y fecha
  		products: productList
  	});


  });

});



module.exports = router;