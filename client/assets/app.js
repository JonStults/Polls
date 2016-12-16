var app = angular.module('myApp', ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'partials/login.html',
    controller: 'loginController'
  }),
  $routeProvider.when('/partial2', {
    templateUrl: 'partials/polls.html',
    controller: 'pollsController'
  }),
  $routeProvider.when('/poll/:id', {
    templateUrl: 'partials/show.html',
    controller: 'pollsController'
  }),
  $routeProvider.when('/partial4', {
    templateUrl: 'partials/create.html',
    controller: 'createController'
  }),
  $routeProvider.otherwise({
    redirectTo: '/'
  })
});
