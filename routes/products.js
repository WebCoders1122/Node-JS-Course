const express = require("express");
const {
  createProduct,
  getAllProducts,
  getOneProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/product"); //product.js controller
const router = express.Router();

router
  .post("/", createProduct)
  .get("/", getAllProducts)
  .get("/:id", getOneProduct)
  .put("/:id", replaceProduct)
  .patch("/:id", updateProduct)
  .delete("/:id", deleteProduct);

exports.router = router;
