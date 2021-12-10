const { Router } = require("express");
const userRoute = require("./user.routes");
const routes = Router();

routes.use("/users", userRoute);

module.exports = routes;
