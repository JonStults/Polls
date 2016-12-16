console.log('polls model');

var mongoose = require('mongoose');

var PollsSchema = new mongoose.Schema({
  user: String,
  question: String,
  option_one: String,
  option_two: String,
  option_three: String,
  option_four: String,
  date: Date,
  votes: 0
});

mongoose.model('Polls', PollsSchema);
