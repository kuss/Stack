var id = require('pow-mongodb-fixtures').createObjectId

var users = exports.users = {
  test: { 
    "_id": id(), 
    "point": 0, 
    "kaistauth": false, 
    "authToken": "", 
    "salt": "897305656015", 
    "hashed_password": "f9b0d7668d4b18d706bcb3f2e03c10fcfa8c6536", 
    "provider": "local", 
    "username": "test", 
    "email": "test@stack.kaist.ac.kr", 
    "name": "test", 
    "__v": 0 
  }
}
