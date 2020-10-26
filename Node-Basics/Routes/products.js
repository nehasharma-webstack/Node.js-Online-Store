const express = require("express");

const productController = require("../controllers/products");
const router = express.Router();

router.get("/", productController.fetchAllProducts);
router.get("/products/:productId", productController.fetchProductById);
router.get("/add-product", productController.addProductForm);
router.post("/add-product", productController.postAddProduct);
router.put("/products/:productId", productController.updateProduct);

module.exports = router;
