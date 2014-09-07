var app = angular.module("myapp", ['ngRoute']).config(function($routeProvider) {
  $routeProvider.when('/:name', { templateUrl: 'templates/show.html', controller:'ShowController'});
  // $routeProvider.when('/about', { templateUrl: 'templates/about.html'});
});