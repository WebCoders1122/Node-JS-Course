const express = require("express");
const { signUp, login, logout } = require("../controller/auth");
const router = express.Router();
const passport = require("passport");
const { strategy } = require("../strategies/localStrategy");

router
  .post("/signup", signUp)
  .post("/login", passport.authenticate("local"), login)
  .post("/logout", logout);
//   .post("/logout", (req, res, next) => {
// console.log("logged out");
//   });

exports.router = router;
