app.controller('loginController', ['$scope', 'pollsFactory', '$location', function($scope, pollsFactory, $location){
  $scope.polls = [];
  $scope.submitUser = function(user){
    pollsFactory.store(user, function(createdUser){
    })
    $location.url('/partial2');
  };
}]);
