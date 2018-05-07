var app = angular.module("weatherApp", ['ui.router']);

app.config(function($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider
		.state('dashboard', {
            url: '/dashboard',
            templateUrl: '/containers/dashboard/dashboard.html',
       		controller:'dashbordCtrl'
        })

        .state('about', {   
        });

});