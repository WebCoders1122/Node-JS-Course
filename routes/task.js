const express = require("express");
const { createTask } = require("../controller/task");
const router = express.Router();

router.post("/", createTask);

exports.router = router;
