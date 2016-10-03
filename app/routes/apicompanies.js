var models = require('../../server/models/');
var config = require('../../server/config/config.js');
var Company = require('../../server/models/').Company;

module.exports = function(app, express) {

	var api = express.Router();

 	api.post('/companycreate', function(req, res){
	    Company.create(req.body)
		    .then(function (newCompany) {
		        res.status(200).json({
		        	newCompany,
		        	success:true,
		        	id: newCompany.id
		      	});
		    })
		    .catch(function (error){
		        res.status(500).json(error);
		    });
	});

	 api.get('/companydetail/:id', function(req, res){
	    Company.findById(req.params.id)
		    .then(function (company) {
		        res.status(200).json({
		        	company,
		        	success:true,
		      	});
		    })
		    .catch(function (error){
		        res.status(500).json(error);
		    });
	});
	
	api.get('/companygetall', function(req,res){
    	Company.findAll()
		    .then(function (companies) {
		        res.status(200).json(companies);
		    })
		    .catch(function (error) {
		        res.status(500).json(error);
		    });
    });

    api.put('/companyupdate/:id', function(req, res){
		    Company.update(req.body, {
		      where: {
		        id: req.params.id
		      }
		    })
		    .then(function (updatedRecords) {
		      res.status(200).json(updatedRecords);
		    })
		    .catch(function (error){
		      res.status(500).json(error);
		    });
		  // }
	});

	api.delete('/companydelete/:id', function(req,res){
		    Company.destroy({
		      where: {
		        id: req.params.id
		      }
		    })
		    .then(function (deletedRecords) {
		      res.status(200).json(deletedRecords);
		    })
		    .catch(function (error){
		      res.status(500).json(error);
		    });
		  // };
	});


return api;

}