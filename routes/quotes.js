const express = require("express");
const quoteController = require("../controller/quotes");
const router = express.Router();

// CRUD = create read update and delete operations || REST APIs
router
  .post("/", quoteController.create)
  .get("/", quoteController.getAll)
  .get("/ssr", quoteController.getQoutesSsr)
  .get("/:id", quoteController.getOne)
  .put("/:id", quoteController.replace)
  .patch("/:id", quoteController.update)
  .delete("/:id", quoteController.remove);

exports.router = router;
