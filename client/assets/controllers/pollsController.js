app.controller('pollsController', ['$scope', '$routeParams', 'pollsFactory', function($scope, $routeParams, pollsFactory){
  $scope.polls = [];
  $scope.id = $routeParams.id;
  $scope.me = pollsFactory.currentUser;
  pollsFactory.index(function(polls){
    $scope.polls = polls;
    })
  $scope.upVote = function(num){
  pollsFactory.update($scope.id, num, function(upVote){
    for(var i=0; i<$scope.polls.length; i++){
      if($scope.polls[i]._id == upVote._id){
        $scope.polls[i] = upVote;
        }
      }
    })
  }
  $scope.deletePoll = function(poll){
    pollsFactory.delete(poll, function(data){
      pollsFactory.index(function(polls){
        $scope.polls = polls;
      })
    })
  }
}]);
