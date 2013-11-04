var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var FileSchema = new Schema({
  title: { type: String, default: '' },     // for showing
  filename: { type: String, default: '' },  // real file name
  author: { type: Schema.ObjectId, ref: 'User' },
  lecture: { type: Schema.ObjectId, ref: 'Lecture' },
  createdAt: { type: Date, default: Date.now },
  description: { type: String, default: '' },
  is_private: { type: Boolean, default: false },
  point: { type: Schema.ObjectId, ref: 'Point' }
})

FileSchema.statics = {
  getByLecture: function (lecture, cb) {
    this.find({'lecture': lecture._id})
        .exec(cb)
  }
};

mongoose.model('File', FileSchema)
