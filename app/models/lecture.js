var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var getKeywords = function(keywords) {
  return keywords.join(',')
}

var setKeywords = function(keywords) {
  return keywords.split(',')
}

var LectureSchema = new Schema({
  code: { type: String, default: '' },
  old_code: { type: String, default: '' },
  year: { type: Number, default: 1980 },
  semester: { type: Number, default: 0 },
  department: { type: Schema.ObjectId, ref: 'Department'},
  professor: { type: Schema.ObjectId, ref: 'Professor'},
  lecture_type: { type: String, default: '' },
  file: [{
    title: { type: String, default: '' },     // for showing
    filename: { type: String, default: '' },  // real file name
    author: { type: Schema.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    description: { type: String, default: '' },
    point: { type: Schema.ObjectId, ref: 'Point' }
  }],
  keyword: { type: [], get: getKeywords, set: setKeywords },
  otl_path: { type: String, default: '' }
})

mongoose.model('Lecture', LectureSchema)
