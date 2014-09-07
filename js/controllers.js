app.controller('SideController', ['$scope', 'nameFactory', function($scope, nameFactory) {
  $scope.items = [];
  nameFactory.getName.success(function(data) {
    $scope.items = data;
  });
}]);


app.controller('ShowController', ['$scope', '$routeParams', 'docFactory', function($scope, $routeParams, docFactory) {
  docFactory.getDoc($routeParams.name).success(function(data) {
    $scope.content = data;
  });

}]);
