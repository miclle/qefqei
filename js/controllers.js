app.controller('NameController', function($scope, nameFactory) {
  $scope.names = [];

  var init = function() {
    nameFactory.getName.success(function(data) {
      $scope.names = data;
    });
  };

  init();

  // $scope.addComment = function(comment, i) {
  //   $scope.feed[i].comments.push(comment);
  //   $scope.newComment = '';
  // };
});
