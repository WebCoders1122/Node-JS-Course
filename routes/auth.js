const express = require("express");
const { signUp, login } = require("../controller/auth");
const router = express.Router();

router.post("/signup", signUp).post("/login", login);

exports.router = router;
