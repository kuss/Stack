var env = process.env.NODE_ENV || 'development'
  , config = require('../../../config/config')[env]
  , fixtures = require('pow-mongodb-fixtures').connect(config.dbname);

var error = function(err, message) {
  console.log(message);
  console.log(err);
};

fixtures.clear(function(err) { error(err, "clear"); });
fixtures.load(__dirname + '/fixtures', function(err) { error(err, "load") });
