var async = require('async')
var home = require('../app/controllers/home')
var user = require('../app/controllers/user')

module.exports = function(app, passport) {
  app.get('/', home.index)

  app.get('/signup', user.signup)
  app.post('/signup', user.create)

  app.get('/emailauth', user.emailauth)

  app.get('/login', user.login)
  app.post('/login', 
    passport.authenticate('local', {
      failureRedirect: '/login',
      failureFlash: 'Invalid email or password'
    }), user.loginSucceed)
}
