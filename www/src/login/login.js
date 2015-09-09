angular.module('places')
	.config(function ($stateProvider) {

		$stateProvider.state('login', { 
			data:{title:""},
			url: '/login',
			templateUrl: 'src/login/login.html'
		});

	});