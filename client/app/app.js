angular.module('MyApp', 
		[
			'appRoutes', 
			'mainController', 
			'authService', 
			'userController', 
			'userService',
			'companyController' ,
			'companyService'
			])

// .config(function($httpProvider){
// 	$httpProvider.interceptors.push('AuthInterceptor');
// })