const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  birthDate: Date,
  genero: String,
});
const User = mongoose.model("users", userModel);

module.exports = User;
