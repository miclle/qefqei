var app = angular.module("myapp", ['ngRoute', 'customFilters.markdown', 'customFilters.trust']);

app.config(function($routeProvider) {
  $routeProvider.when('/:name', { templateUrl: 'templates/show.html', controller:'ShowController'});
  $routeProvider.when('/', { templateUrl: 'templates/about.html'});
});

angular.module('customFilters.markdown', []).filter('markdown', function() {
  var converter = new Showdown.converter();
  return function(input) {
    var html = converter.makeHtml(input || '');
    return html;
  }
});

angular.module('customFilters.trust', []).filter('trust', function($sce) {
  return function(input) {
    return $sce.trustAsHtml(input || '');
  }
});