angular.module('companyService',[])

.factory('Company', function($http){

	var companyFactory = {};

	companyFactory.create = function(companyData){
		return $http.post('/api/companycreate', companyData);
	}

	companyFactory.allCompany = function(){
		return $http.get('/api/companygetall');
	}

	// companyFactory.detail = function(){
	// 	return $http.get('/api/companydetail/'+data.id);
	// }

	return companyFactory;
})