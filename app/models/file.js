var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var FileSchema = new Schema({
  title: { type: String, default: '' },     // for showing
  filename: { type: String, default: '' },  // real file name
  author: { type: Schema.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  description: { type: String, default: '' },
  is_private: { type: Boolean, default: false },
  point: { type: Schema.ObjectId, ref: 'Point' }
})

mongoose.model('File', FileSchema)
