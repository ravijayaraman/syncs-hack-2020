const mongoose = require("mongoose");

// To create schema for the user
const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  phoneNo: String
});

var User = new mongoose.model("User", UserSchema);
module.exports = User;
