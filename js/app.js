var app = angular.module("routeCalc", ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    })
    .when('/add', {
      templateUrl: 'partials/add.html',
      controller: 'AddController'
    })
    .when('/div/:numone/:numtwo', {
      templateUrl: 'partials/div.html',
      controller: 'DivController'
    })
    $locationProvider.html5Mode(true);
    // .otherwise({redirectTo: '/'})
})
