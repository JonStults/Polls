app.controller('pollsController', ['$scope', '$routeParams', 'pollsFactory', function($scope, $routeParams, pollsFactory){
  $scope.polls = [];
  $scope.id = $routeParams.id;
  pollsFactory.index(function(polls){
    $scope.polls = polls;
    })
  $scope.upVote = function(){
  pollsFactory.update($scope.id, 1, function(upVote){
    for(var i=0; i<$scope.polls.length; i++){
      if($scope.polls[i]._id == upVote._id){
        $scope.polls[i] = upVote;
        }
      }
    })
  }
}]);
