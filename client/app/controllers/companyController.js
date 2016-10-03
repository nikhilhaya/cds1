angular.module('companyController', ['companyService'])

	.controller('CompanyCreateController', function(Company, $http, $location ){	
		vm = this;
		vm.id = '';
		vm.createCompany = function(){
			vm.message = '';
			console.log("user added");
			Company.create(vm.companyData)
				.success(function(data){
					// clear form
					vm.companyData = '';
					vm.message = data.message;
					vm.id = data.id;
					$location.path('/companydetail/'+vm.id);
				});

		}
	})

	.controller('CompanyDetailController', function(Company, $scope, $routeParams, $http, $location){	
				console.log('before fetching' +$routeParams.id); 		
				
				vm = this;
				vm.detailCompany = function(){
					vm.message = '';
					var id = $routeParams.id;
					console.log("fetching detail for " + $routeParams.id);
					$http.get('/api/companydetail/'+id)
						.success(function(data){
							// clear form
							$scope.company = data;
							vm.companyData = data;
							vm.message = data.message;

						});
					console.log("done fetching detail");
				};
	})

	.controller('CompanyController', function(Company, $location){
		vm = this;
		vm.getAllCompanies = function(){
			vm.message = '';
			Company.getAllCompanies()
				.success(function(data){
					vm.companies = data;
				});
			}
	})

