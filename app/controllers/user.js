var mongoose = require('mongoose')
  , User = mongoose.model('User')
  , Notifier = require('../mailer/notifier')
  , util = require('util')

exports.signup = function(req, res) {
  res.render('user/signup', {
    title: 'SignUp',
    user: new User(),
    message: req.flash('error')
  })
}

exports.create = function(req, res) {
  var user = new User(req.body)
  user.provider = 'local'
  user.save(function (err) {
    if (err) {
      return res.render('user/signup', {
        errors: err.errors,
        user: user,
        title: 'Sign up'
      })
    }

    return res.redirect('/')

    user.set('authToken', user.makeAuthToken())
  })
}

exports.emailauth = function(req, res) {
  var user = User.find({ authToken: req.query.authToken })
  user.set('kaistauth', true)

  req.logIn(user, function(err) {
    if (err) return next(err)
    return res.redirect('/')
  })
}

exports.login = function(req, res) {
  res.render('user/login', {
    title: 'Login',
    message: req.flash('error')
  })  
}

exports.loginSucceed = function(req, res) {
  if (req.session.returnTo) {
    res.redirect(req.session.returnTo)
    delete req.session.returnTo
    return
  }
  res.redirect('/main')
}
