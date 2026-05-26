const express = require("express");

const {
  createProduct,
  getProducts,
  getSingleProduct,
} = require("../controllers/productController");

const router = express.Router();

router.post("/", createProduct);

router.get("/", getProducts);

router.get("/:id", getSingleProduct);

module.exports = router;