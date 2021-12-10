const User = require("../model/user.model");

async function createUserService({
  firstName,
  lastName,
  email,
  birthDate,
  genero,
}) {
  try {
    const user = await new User({
      firstName,
      lastName,
      email,
      birthDate,
      genero,
    });
    console.log("user", user);
    const result = await user.save();
    return result;
  } catch (error) {
    throw error;
  }
}

async function searchUserService() {
  try {
    const result = await User.find({});
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createUserService,
  searchUserService,
};
