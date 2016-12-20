console.log('polls model');

var mongoose = require('mongoose');

var PollsSchema = new mongoose.Schema({
  user: String,
  question: String,
  option_one: {name: String, votes: 0},
  option_two: {name: String, votes: 0},
  option_three: {name: String, votes: 0},
  option_four: {name: String, votes: 0},
  date: Date
});

mongoose.model('Polls', PollsSchema);
