var mongoose = require('mongoose')
  , async = require('async')
  , Lecture = mongoose.model('Lecture')
  , Department = mongoose.model('Department')

exports.index = function(req, res) {
  async.parallel([
    function (callback) {
      Department.list({}, function(err, departments) {
        callback(null, departments);       
      });
    },
    function (callback) {
      Lecture.list({}, function(err, lectures) {
        callback(null, lectures);
      });
    }
  ], function(err, result) {
    var departments = result[0];
    var lectures = result[1];
    var result = {};

    for (var i in lectures) {
      if (result[lectures[i].department.id] === undefined) {
        result[lectures[i].department.id] = [];
      }
      result[lectures[i].department.id].push(lectures[i]);
    }

    res.render('lecture/index', {
      'departments': departments,
      'lectures': result,
	  'debug': JSON.stringify(result)
    });
  });
};

exports.view = function(req, res) {
  Lecture.getByOldCode(req.params.old_code, function(err, lecture) {
    res.json(JSON.stringify(lecture))
  });
};
