app.controller('createController', ['$scope', 'pollsFactory', '$location', function($scope, pollsFactory, $location){
  $scope.polls = [];
  $scope.createPoll = function(newPoll){
    pollsFactory.create(newPoll, function(createdPoll){
      $scope.polls.push(createdPoll);
      $location.url('/partial2')
    })
  };
}]);
