
/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
  , Notifier = require('notifier')
  , env = process.env.NODE_ENV || 'development'
  , config = require('../../config/config')[env]

/**
 * Notification methods
 */

var Notify = {

  kaistAuth: function(user, cb) {
    var obj = {
      to: user.email,
      from: config.sysop_email,
      subject: 'Stack 인증 메일입니다.',
      locals: {
        name: user.name,
        authToken: user.authToken
      }
    }

    notifier.send('kaistAuth', obj, cb)
  }
}

/**
 * Expose
 */

module.exports = Notify
