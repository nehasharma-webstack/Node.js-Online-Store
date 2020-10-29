const express = require("express");
const { check } = require("express-validator");

const productController = require("../controllers/products");
const router = express.Router();

router.get("/add-product", productController.addProductForm);
router.post("/add-product", productController.addProduct);
router.delete("/products/:productId", productController.deleteProduct);
module.exports = router;
