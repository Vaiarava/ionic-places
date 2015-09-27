angular.module('places')
	.config(function ($stateProvider) {

		//resolve to restrict access without authentification
		var authResolve = function(LoginService,$state){
			var promise = LoginService.requireAuth()
				.catch(function(error){

					$state.go("login");

					return promise;
				});
			return promise;
		};

		$stateProvider

			// setup an abstract state for the tabs directive
			.state('tab', {
				url: "/tab",
				abstract: true,
				templateUrl: "src/nav/menu/menu.html",
				controller: "MenuCtrl"

				//disable resolve auth to test more quickly
				/*resolve:{
					auth: authResolve
				}*/
			});

	});
