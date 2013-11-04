var mongoose = require('mongoose')
  , async = require('async')
  , Lecture = mongoose.model('Lecture')
  , Department = mongoose.model('Department')
  , File = mongoose.model('File')

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
    var departments = {};
    var lectures = result[1];
    var lecture_output = {};

    for (var i in result[0]) {
      departments[result[0][i].id] = result[0][i];
    }

    for (var i in lectures) {
      if (lecture_output[lectures[i].department.id] === undefined) {
        lecture_output[lectures[i].department.id] = [];
      }
      lecture_output[lectures[i].department.id].push(lectures[i]);
    }

    res.render('lecture/index', {
      'departments': departments,
      'lectures': lecture_output,
      'lecture_debug': JSON.stringify(lecture_output),
      'department_debug': JSON.stringify(departments)
    });
  });
};

exports.view = function(req, res) {
  async.waterfall([
    function (callback) {
      Lecture.getByOldCode(req.params.old_code, function(err, lectures) {
        callback(null, lectures);
      });
    },
    function (lectures, callback) {
      var all_files = {};
      for (var i in lectures) {
        File.getByLecture(lectures[i], function(err, files) {
          all_files[lectures[i]._id] = files;
          callback(null, lectures, all_files); // TODO: don't callback at this time: not valid when lectures >= 2
        });
      }
    }
  ], function(err, lectures, files) {
    res.render('lecture/view', {
      'lectures': lectures,
      'files': files
    });   
  });
};
