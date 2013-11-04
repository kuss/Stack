var id = require('pow-mongodb-fixtures').createObjectId
  , u = require('./user')
  , l = require('./lecture')

var files = exports.files = {
  MAS100_Lec1: {
    _id: id(),
    title: 'Mathematics Lecture1',
    filename: 'lec1.pdf',
    author: u.users.test._id,
    lecture: l.lectures.MAS100._id,
    createdAt: Date.now,
    description: '렉쳐1',
    is_private: false,
    point: 3
  },
  MAS100_Lec2: {
    _id: id(),
    title: 'Mathematics Lecture2',
    filename: 'lec2.pdf',
    author: u.users.test._id,
    lecture: l.lectures.MAS100._id,
    createdAt: Date.now,
    description: '렉쳐2',
    is_private: false,
    point: 3
  },
  MAS100_Lec3: {
    _id: id(),
    title: 'Mathematics Lecture3',
    filename: 'lec3.pdf',
    author: u.users.test._id,
    lecture: l.lectures.MAS100._id,
    createdAt: Date.now,
    description: '렉쳐3',
    is_private: false,
    point: 3
  },
  CS101_Lec1: {
    _id: id(),
    title: 'CS Lecture1',
    filename: 'lec1.pdf',
    author: u.users.test._id,
    lecture: l.lectures.CS100._id,
    createdAt: Date.now,
    description: '렉쳐1',
    is_private: false,
    point: 3
  },
  CS101_Lec2: {
    _id: id(),
    title: 'CS Lecture2',
    filename: 'lec2.pdf',
    author: u.users.test._id,
    lecture: l.lectures.CS100._id,
    createdAt: Date.now,
    description: '렉쳐2',
    is_private: false,
    point: 3
  },
  CS101_Lec3: {
    _id: id(),
    title: 'CS Lecture3',
    filename: 'lec3.pdf',
    author: u.users.test._id,
    lecture: l.lectures.CS100._id,
    createdAt: Date.now,
    description: '렉쳐3',
    is_private: false,
    point: 3
  },
}
