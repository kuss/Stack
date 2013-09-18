var home = require('../app/controllers/home')
var user = require('../app/controllers/user')
var lecture = require('../app/controllers/lecture')
var file = require('../app/controllers/file')
var auth = require('./middlewares/authhelper')

module.exports = function(app, passport) {
  app.get('/', auth.requiresLogin, lecture.index);

  app.get('/signup', user.signup);
  app.post('/signup', user.create);

  app.get('/emailauth', user.emailauth);

  app.get('/login', user.login);
  app.post('/login', 
    passport.authenticate('local', {
      failureRedirect: '/login',
      failureFlash: 'Invalid email or password'
    }), user.loginSucceed);

  app.get('/lecture', lecture.index);
  app.get('/lecture/:old_code', lecture.view);

  app.get('/lecture/:id/upload', file.uploadform);
  app.post('/lecture/:id/upload', file.upload);
}
