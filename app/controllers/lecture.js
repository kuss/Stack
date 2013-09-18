var mongoose = require('mongoose')
  , Lecture = mongoose.model('Lecture')
  , Department = mongoose.model('Department')

exports.index = function(req, res) {
  res.render('index', {
  });
}
