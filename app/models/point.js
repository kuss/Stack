var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , pointTypes = ['earn', 'use']

var PointSchema = new Schema({
  about: { type: Number, default: 0 },
  value: { type: Number, default: 0 } 
})

var PointRecordSchema = new Schema({
  point: { type: Schema.ObjectId, ref: 'Point' },
  owner: { type: Schema.ObjectId, ref: 'User' }
})

mongoose.model('Point', PointSchema)
mongoose.model('PointRecord', PointRecordSchema)
