var app = angular.module("myapp", ['ngRoute', 'customFilters.markdown', 'customFilters.trust']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider.when('/:name', { templateUrl: 'templates/show.html', controller:'ShowController'});
  $routeProvider.when('/', { templateUrl: 'templates/about.html'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
