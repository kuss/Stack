var id = require('pow-mongodb-fixtures').createObjectId
  , d = require('./department')
  , p = require('./professor')

var lectures = exports.lectures = {
  MAS100: {
    _id: id(),
    code: '36.100',
    old_code: 'MAS100',
    year: 2000,
    semester: 1,
    department: d.departments.math._id,
    professor: p.professors.Jaeman._id,
    lecture_type: '기초필수',
    file: [],
    keyword: '테스트',
    otl_path: ''
  },
  CS100: {
    _id: id(),
    code: '47.100',
    old_code: 'CS100',
    year: 2000,
    semester: 1,
    department: d.departments.cs._id,
    professor: p.professors.Jaeman._id,
    lecture_type: '기초필수',
    file: [],
    keyword: '테스트',
    otl_path: ''
  },
  CS101: {
    _id: id(),
    code: '47.101',
    old_code: 'CS100',
    year: 2000,
    semester: 1,
    department: d.departments.cs._id,
    professor: p.professors.Jaeman._id,
    lecture_type: '기초필수',
    file: [],
    keyword: '테스트',
    otl_path: ''
  }
}
