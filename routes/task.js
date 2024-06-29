const express = require("express");
const {
  createTask,
  getAllTask,
  getOneTask,
  replaceOneTask,
  updateOneTask,
  deleteOneTask,
} = require("../controller/task");
const router = express.Router();

router
  .post("/", createTask)
  .get("/", getAllTask)
  .get("/:query", getOneTask)
  .put("/:query", replaceOneTask)
  .patch("/:query", updateOneTask)
  .delete("/:query", deleteOneTask);

exports.router = router;
