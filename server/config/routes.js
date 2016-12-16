console.log('future routes go here')

polls = require('../controllers/polls.js')

module.exports = function(app){
  app.post('/polls', polls.create);
  app.get('/polls', polls.index);
  app.post('/options', polls.option);
  app.post('/vote', polls.update);
}
