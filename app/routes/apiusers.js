// var models = require('../../server/models/');
// var config = require('../../server/config/config.js');


// module.exports = function(app, express) {

// 	var api = express.Router();

// 	api.get('/users', function(req,res){
// 		// index(req, res) {
// 		    User.findAll()
// 		      .then(function (users) {
// 		        res.status(200).json(users);
// 		      })
// 		      .catch(function (error) {
// 		        res.status(500).json(error);
// 		      });
// 	  	// }
// 	});

// 	api.get('/users/:id', function(req, res){
// 		// show(req, res) {
// 			User.findById(req.params.id)
// 				.then(function (user) {
// 		  			res.status(200).json(user);
// 				})
// 				.catch(function (error){
// 		  			res.status(500).json(error);
// 				});
// 		// }
// 	});

// return api;

// }