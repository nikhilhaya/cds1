angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider){

	$routeProvider
		.when('/', {
			templateUrl: 'app/views/pages/home.html',
			controller: 'MainController',
			controllerAs: 'main'
		})
		.when('/homeuser', {
			templateUrl: 'app/views/pages/homeuser.html',
			controller: 'MainController',
			controllerAs: 'main'
		})
		.when('/login', {
			templateUrl: 'app/views/pages/login.html',
			controller: 'MainController',
			controllerAs: 'login'
		})
		.when('/signup', {
			templateUrl: 'app/views/pages/signup.html',
			controller: 'UserCreateController',
			controllerAs: 'user'
		})
		.when('/logout', {
			templateUrl: 'app/views/pages/home.html'
		})
		.when('/companycreate', {
			templateUrl: 'app/views/pages/companycreate.html',
			controller: 'CompanyCreateController',
			controllerAs: 'company'
		})
		.when('/companyall',{
			templateUrl: 'app/views/pages/companyall.html',
			controller: 'CompanyAllController',
			controllerAs: 'company',
			resolve: {
				companies: function(company){
					return company.allCompanies();
				}
			}
		})
		.when('/companydetail/:id', {
			templateUrl: 'app/views/pages/companydetail.html',
			controller: 'CompanyDetailController',
			controllerAs: 'company',
			resolve: {
			      // I will cause a 1 second delay
			      delay: function($q, $timeout) {
			        var delay = $q.defer();
			        $timeout(delay.resolve, 1000);
			        return delay.promise;
			      }
			  }
		})
		.when('/companyhome', {
			templateUrl: 'app/views/pages/companyhome.html',
			// controller: ''
		})
		// .otherwise({
		// 	// templateUrl: 'app/views/pages/404.html'
		// 	redirectTo: 'app/views/pages/404.html'
		// })

	$locationProvider.html5Mode(true);
});