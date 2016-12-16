app.controller('pollsController', ['$scope', '$routeParams', 'pollsFactory', function($scope, $routeParams, pollsFactory){
  $scope.polls = [];
  $scope.id = $routeParams.id;
  pollsFactory.index(function(polls){
    $scope.polls = polls;
    })
}]);
