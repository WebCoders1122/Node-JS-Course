const express = require("express");
const { createTask, getAllTask, getOneTask } = require("../controller/task");
const router = express.Router();

router.post("/", createTask).get("/", getAllTask).get("/:query", getOneTask);

exports.router = router;
