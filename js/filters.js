angular.module('customFilters.markdown', []).filter('markdown', function() {
  var converter = new Showdown.converter();
  return function(input) {
    return converter.makeHtml(input || '');
  }
});

angular.module('customFilters.trust', []).filter('trust', ['$sce', function($sce) {
  return function(input) {
    return $sce.trustAsHtml(input || '');
  }
}]);