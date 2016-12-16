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
      option_one: req.body.option_one,
      option_two: req.body.option_two,
      option_three: req.body.option_three,
      option_four: req.body.option_four,
      votes: 0,
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
        console.log('successful');
      }
      poll.votes += req.body.num;
      poll.save(function(){
        res.json({ poll: poll })
      })
    })
  }
}
