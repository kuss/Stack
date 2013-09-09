var async = require('async')
var home = require('../app/controllers/home')

module.exports = function(app, passport) {
  app.get('/', home.index)
}
