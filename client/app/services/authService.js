angular.module('authService', [])

// fetch api from server
.factory('Auth', function($http, $q, AuthToken){
	
	var authFactory = {};

	authFactory.login = function(username, password){
		return $http.post('/api/login', {
			username: username,
			password: password
		})
		// success is a promise function
		.success(function(data){
			AuthToken.setToken(data.token);
			return data;
		})
	}
	
	authFactory.logout = function(){
		AuthToken.setToken();
	}

	authFactory.isLoggedIn = function(){
		if(AuthToken.getToken())
			return true;
		else
			return false;
	}

	authFactory.getUser = function(){
		if(AuthToken.getToken())
			return $http.get('/api/me');
		else
			return $q.reject({message: "User has no token"});
	}
	
	return authFactory;
})

// get token from browser
.factory('AuthToken', function($window){

	var authTokenFactory = {}

	authTokenFactory.getToken = function(){
		return $window.localStorage.getItem('token');
	}

	authTokenFactory.setToken = function(token){
		if(token)
			$window.localStorage.setItem('token', token);
		else
			$window.localStorage.removeItem('token');
	}

	return authTokenFactory;
})

// check if token exists in local storage
.factory('AuthInterceptor', function($q, $location, Authtoken){

	var interceptorFactory = {};

	interceptorFactory.request = function(config){
		var token = AuthToken.getToken();
		if(token){
			config.headers['x-access-token'] = token;
		}
		return config;
	};

	interceptorFactory.responseError = function(response){
		if(response.status == 403)
			$location.path('/login');
		return $q.reject(response);
	}

	return interceptorFactory;
});