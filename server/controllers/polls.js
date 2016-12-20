console.log('polls controller');
var mongoose = require('mongoose')
var polls = mongoose.model('Polls');
module.exports = {

  index: function (req, res){
    polls.find({}, function(err, polls){
      if(err){
        console.log(err);
      }else{
        res.json({ polls: polls });
      }
    });
  },
  option: function (req, res){
    polls.find({}).populate('options').exec(function(polls){
      res.json({ poll: poll });
    })
  },
  create: function (req, res){
    console.log('hello');
    var now = new Date();
    console.log(req.body.options);
    var poll = new polls({
      question: req.body.question,
      option_one: {name: req.body.option_one, votes: 0},
      option_two: {name: req.body.option_two, votes: 0},
      option_three: {name: req.body.option_three, votes: 0},
      option_four: {name: req.body.option_four, votes: 0},
      user: req.body.user,
      date: now
    });
    poll.save(function(err){
      if (err){
        console.log(err);
      } else{
        console.log('successfully saved', poll);
      }
      res.json({ poll: poll });
    })
  },
  update: function (req, res){
    polls.findOne({ _id:req.body.id }, function(err, poll){
      if (err){
        console.log(err);
      } else{
        if(req.body.num==1){
          poll.option_one.votes += 1;
        }
        if(req.body.num==2){
          poll.option_two.votes += 1;
        }
        if(req.body.num==3){
          poll.option_three.votes += 1;
        }
        if(req.body.num==4){
          poll.option_four.votes += 1;
        }
      }
      poll.save(function(){
        res.json({ poll: poll })
      })
    })
  },
  delete: function (req, res){
    polls.remove({_id: req.params.id}, function(err, poll) {
      if(err){
          console.log(err);
      } else {
          console.log("Successfully Saved:", poll);
      }
      res.json({update: "deleted"});
  })
  }
}
