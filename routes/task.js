const express = require("express");
const {
  createTask,
  getAllTask,
  getOneTask,
  replaceOneTask,
  updateOneTask,
} = require("../controller/task");
const router = express.Router();

router
  .post("/", createTask)
  .get("/", getAllTask)
  .get("/:query", getOneTask)
  .put("/:query", replaceOneTask)
  .patch("/:query", updateOneTask);

exports.router = router;
