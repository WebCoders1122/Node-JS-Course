const express = require("express");
const { signUp, login } = require("../controller/auth");
const router = express.Router();
const { User } = require("../model/user");
//passport js authentication
const passport = require("passport");

router.post("/signup", signUp).post("/login", login);

exports.router = router;
