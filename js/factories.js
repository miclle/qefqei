app.factory('nameFactory', ['$http', function($http) {
  return {
    getName: $http.get('/api/names.json')
  };
}]);


app.factory('docFactory', function($http) {
  return {
    getDoc: function(name){
      return $http.get('/api/docs/'+name+'.md');
    }
  };
});
