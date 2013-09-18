var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var DepartmentSchema = new Schema({
  id: { type: String, default: '' },
  prefix: { type: String, default: '' },
  name: { type: String, default: '' },
})

DepartmentSchema.statics = {
  list: function(options, cb) {
    var criteria = options.criteria || {};

    this.find(criteria)
      .sort({'id': 1})
      .exec(cb);
  }
}

mongoose.model('Department', DepartmentSchema)
