app.factory('nameFactory', function($http) {
  return {
    getName: $http.get('/api/names.json')
  };
});
