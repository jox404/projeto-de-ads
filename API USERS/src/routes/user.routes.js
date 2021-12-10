const { Router } = require("express");
const userController = require("../controllers/user.controller");

const userRoute = Router();

userRoute.post("/create", userController.createUser);

userRoute.get(
  "/search",
  userController.allUser
); /* busca todos os mangas manga */

userRoute.get("/:Id", userController.oneUserFind); /* busca um manga pelo id */

userRoute.delete(
  "/delete/:Id",
  userController.oneUserDelete
); /* deleta um manga pelo id */

userRoute.delete(
  "/delete",
  userController.allUserDelete
); /* deleta todos os mangas */

userRoute.put("/patch/:Id", userController.oneUserPatch);

module.exports = userRoute;
