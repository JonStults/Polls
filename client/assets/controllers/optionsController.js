app.controller('optionsController', ['$scope', '$routeParams', 'pollsFactory', function($scope, $routeParams, pollsFactory){
  $scope.polls = [];
  $scope.id = $routeParams.id;
  pollsFactory.options(function(polls){
    $scope.polls = polls;
    })
}]);
