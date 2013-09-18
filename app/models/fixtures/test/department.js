var id = require('pow-mongodb-fixtures').createObjectId

var departments = exports.departments = {
  math: {
    _id: id(),
    id: "36",
    prefix: "MAS",
    name: "수리과학과"
  },
  cs: {
    _id: id(),
    id: "47",
    prefix: "CS",
    name: "전산학과"
  }
}
