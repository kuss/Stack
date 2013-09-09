var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var DepartmentSchema = new Schema({
  id: { type: String, default: '' },
  prefix: { type: String, default: '' },
  name: { type: String, default: '' },
})

mongoose.model('Department', DepartmentSchema)
