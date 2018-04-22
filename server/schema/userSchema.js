var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  name: String,
  nameCoordinate: {
    x: String,
    y: String,
  },
  password: String,
  email: String,
  img: String,
  imgCoordinate: {
    x: String,
    y: String,
  }
});
mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');