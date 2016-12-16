console.log('Polls Factory');
app.factory('pollsFactory', ['$http', function($http) {
      var factory = {};
      factory.currentUser = '';
      factory.index = function(retrievedItems){
        $http.get('/polls').then(function(response){
          retrievedItems(response.data.polls)
        });
      };
      factory.store = function(currentUser, storeUser){
        factory.currentUser = currentUser
        console.log(currentUser);
      };
      factory.create = function(newPoll, finishedCreating){
        newPoll.user = factory.currentUser;
        $http.post('/polls', newPoll).then(function(response){
          finishedCreating(response.data.poll);
        });
      };
      factory.update = function(id, num, madeVote){
        $http.post('/vote', {id:id, num:num}).then(function(response){
          madeVote(response.data.poll);
        })
      }
      return factory;
}]);
