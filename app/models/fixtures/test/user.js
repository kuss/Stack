var id = require('pow-mongodb-fixtures').createObjectId

var users = exports.users = [
  { 
    "_id": id(), 
    "point": 0, 
    "kaistauth": false, 
    "authToken": "", 
    "salt": "844498472375", 
    "hashed_password": "7a04990ec68193b097bdfb1a3f9d2fecbf6eea73", 
    "provider": "local", 
    "username": "kuss", 
    "email": "ajmbell@bawi.org", 
    "name": "Jaeman", 
    "__v": 0 
  }
]
