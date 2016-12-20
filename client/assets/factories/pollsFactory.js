console.log('Polls Factory');
app.factory('pollsFactory', ['$http', function($http) {
      var factory = {};
      var errors = {message: ''};
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
        var question = newPoll.question;
        var option_one = newPoll.option_one;
        var option_two = newPoll.option_two;
        var option_three = newPoll.option_three;
        var option_four = newPoll.option_four;
        if(!newPoll){
          errors.message = "Please fill out all fields";
          return false;
        }
        if(question.length < 8){
          errors.message = 'Question must be at least 8 characters long';
          return false;
        };
        if(option_one.length < 3 || option_two.length < 3 || option_three.length < 3 || option_four.length <3){
          errors.message = 'Options must be at least 3 characters long';
          return false;
        } else {
          $http.post('/polls', newPoll).then(function(response){
            finishedCreating(response.data.poll);
        });
        errors.message = '';
      };
    };
      factory.getErrors = function(){
        return errors;
      };
      factory.update = function(id, num, madeVote){
        $http.post('/vote', {id:id, num:num}).then(function(response){
          madeVote(response.data.poll);
        })
      }
      factory.delete = function(poll, pollDeleted){
        $http.post('/delete/'+poll._id).then(function(response){
          pollDeleted(response.data.poll);
        })
      }
      return factory;
}]);
