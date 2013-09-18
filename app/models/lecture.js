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
  name: { type: String, default: '' },
  semester: { type: Number, default: 0 },
  department: { type: Schema.ObjectId, ref: 'Department'},
  professor: { type: Schema.ObjectId, ref: 'Professor'},
  file: [{ type: Schema.ObjectId, ref: 'File' }],
  keyword: { type: [], get: getKeywords, set: setKeywords },
  otl_path: { type: String, default: '' }
})

LectureSchema.statics = {
  list: function (options, cb) {
    var criteria = options.criteria || {}
    
    this.find(criteria)
        .populate('department', 'id name')
        .sort({'old_code': 1})
        .exec(cb)
  },
  getByOldCode: function (old_code, cb) {
    this.find({'old_code': old_code})
        .exec(cb)
  }
};

mongoose.model('Lecture', LectureSchema)
