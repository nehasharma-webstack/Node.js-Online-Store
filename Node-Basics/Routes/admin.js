const express = require("express");
const { check } = require("express-validator");

const productController = require("../controllers/products");
const router = express.Router();

router.get("/add-product", productController.addProductForm);
router.post(
  "/add-product",
  [
    check("name")
      .isLength({ min: 4 })
      .withMessage("Name has to be min 4 characters long!")
      .not()
      .isNumeric()
      .withMessage("Name must be a string"),
    check("brand")
      .isAlphanumeric()
      .withMessage("Brand cant have special characters")
      .custom((value, { req }) => {
        if (value !== req.body.name) {
          throw new Error("Name and brand should be same");
        }
        return true;
      }),
    check("price")
      .isNumeric()
      .withMessage("Price should be a number")
      .custom((value) => {
        if (value <= 0) {
          throw new Error("Price must be greater than 0");
        }
        return true;
      }),
  ],
  productController.addProduct
);
router.delete("/products/:productId", productController.deleteProduct);
module.exports = router;
