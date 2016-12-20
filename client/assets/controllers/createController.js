
app.controller('createController', ['$scope', 'pollsFactory', '$location', '$routeParams', function($scope, pollsFactory, $location, $routeParams){
  $scope.polls = [];
  $scope.createPoll = function(newPoll){
    pollsFactory.create(newPoll, function(createdPoll){
      $scope.polls.push(createdPoll);
      $location.url('/partial2');
    })
  };
  $scope.errors = pollsFactory.getErrors();
}]);
