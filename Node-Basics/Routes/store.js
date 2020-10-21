const express = require("express");
const path = require("path");
const router = express.Router();
const productController = require("../controllers/products");

router.get("/", productController.fetchAllProducts);

router.get("/products/:productId", productController.fetchProduct);
module.exports = router;
