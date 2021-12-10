const userService = require("../services/user.services");
const User = require("../model/user.model");

async function createUser(req, res) {
  try {
    const { firstName, lastName, email, birthDate, genero } = req.body;
    const user = await userService.createUserService({
      firstName,
      lastName,
      email,
      birthDate,
      genero,
    });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function allUser(req, res) {
  try {
    const listUser = await userService.searchUserService();
    return res.status(200).json(listUser);
  } catch (error) {
    throw error;
  }
}

async function oneUserFind(req, res) {
  try {
    const user = await User.findById(req.params.Id);
    return res.json(user);
  } catch (error) {
    throw error;
  }
}

async function oneUserDelete(req, res) {
  try {
    const user = await User.remove({ _id: req.params.Id });
    res.json(user);
  } catch (error) {
    throw error;
  }
}

async function allUserDelete(req, res) {
  try {
    const user = await User.deleteMany({});
    res.json(user);
  } catch (error) {
    throw error;
  }
}

async function oneUserPatch(req, res) {
  try {
    const user = await User.updateOne(
      { _id: req.params.Id },
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          birthDate: req.body.birthDate,
          genero: req.body.genero,
        },
      }
    );
    res.json(user);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createUser,
  allUser,
  oneUserFind,
  oneUserDelete,
  allUserDelete,
  oneUserPatch,
};
