var env = process.env.NODE_ENV || 'development'
  , config = require('../../../config/config')[env]
  , fixtures = require('pow-mongodb-fixtures').connect(config.dbname);

var error = function(err, message) {
  if (err === undefined) {
    console.log(message + " completed!");
    return;
  }
  
  console.log("error occured when doing " + message + ".");
  console.log(err)

  fixtures.clear(null);
};

fixtures.clear(function(err) { error(err, "clear"); });
fixtures.load(__dirname + '/test', function(err) { error(err, "load"); process.exit(1); });
