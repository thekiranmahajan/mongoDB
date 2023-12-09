const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/firstDB");

const userSchema = mongoose.Schema({
  username: String,
  firstName: String,
  lastName: String,
  age: Number,
});

module.exports = mongoose.model("user", userSchema);
