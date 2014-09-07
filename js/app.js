var app = angular.module("myapp", ['ngRoute', 'customFilters.markdown', 'customFilters.trust']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $routeProvider.when('/:name', { templateUrl: 'templates/show.html', controller:'ShowController'});
  $routeProvider.when('/', { templateUrl: 'templates/about.html'});
}]);
