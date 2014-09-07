app.controller('SideController', ['$scope', 'nameFactory', function($scope, nameFactory) {
  $scope.names = [];

  nameFactory.getName.success(function(data) {
    $scope.names = data;
  });
}]);


app.controller('ShowController', ['$scope', '$routeParams', 'docFactory', function($scope, $routeParams, docFactory) {
  $scope.name = $routeParams.name

  docFactory.getDoc($scope.name).success(function(data) {
    $scope.content = data;
  });

}]);
