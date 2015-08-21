var app = angular.module("routeCalc", ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    })
    .when('/add/:numone/:numtwo', {
      templateUrl: 'partials/add.html',
      controller: 'AddController'
    })
    .when('/div/:numone/:numtwo', {
      templateUrl: 'partials/div.html',
      controller: 'DivController'
    })
    .otherwise({redirectTo: '/'})
})
