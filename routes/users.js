const express = require("express");
const { createUser, getAllUsers } = require("../controller/user");
const router = express.Router();

router.post("/", createUser).get("/", getAllUsers);

exports.router = router;
