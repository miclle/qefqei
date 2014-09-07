app.controller('SideController', function($scope, nameFactory) {
  $scope.names = [];

  var init = function() {
    nameFactory.getName.success(function(data) {
      $scope.names = data;
    });
  };

  init();
});


app.controller('ShowController', function($scope) {
  console.log('show')
  // $scope.names = [];

  // var init = function() {
  //   nameFactory.getName.success(function(data) {
  //     $scope.names = data;
  //   });
  // };

  // init();

  // $scope.addComment = function(comment, i) {
  //   $scope.feed[i].comments.push(comment);
  //   $scope.newComment = '';
  // };
});
