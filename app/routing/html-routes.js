var path = require('path');

module.exports = function(app) {
//route to home page
  app.get('/', function (req, res) {
      res.sendFile(path.join(__dirname, '/../public/home.html'));
  });
  //route to survery.html)
  app.get('/survey', function (req, res) {
      res.sendFile(path.join(__dirname, '/../public/survey.html'));
  });
  //default to home
  app.use(function (req, res) {
      res.sendFile(path.join(__dirname + '/../public/home.html'));
  });
};
