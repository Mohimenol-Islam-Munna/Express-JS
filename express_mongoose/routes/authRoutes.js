const express = require("express");
const authRouter = express.Router();

// import controller
const authController = require("../controllers/auth/authController");

// login route
authRouter.post("/login", authController.login);
// register
authRouter.post("/register", authController.register);

module.exports = authRouter;
