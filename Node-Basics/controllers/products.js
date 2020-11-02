const Product = require("../models/products");
const { validationResult } = require("express-validator");

exports.addProductForm = (req, res, next) => {
  res.render("add-product", {
    title: "Add Product",
    path: "/admin/add-product",
    error_message: "",
  });
};

exports.addProduct = (req, res, next) => {
  const name = req.body.name;
  const price = req.body.price;
  const brand = req.body.brand;
  const rating = req.body.rating;

  const products = new Product({
    name,
    price,
    brand,
    rating,
  });
  //Validation error handling

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.render("add-product", {
      title: "Add Product",
      path: "/admin/add-product",
      error_message: errors.array(),
    });
  }

  products
    .save()
    .then((result) => {
      // res.json({
      //   status: "Success",
      //   message: "Product added successfully",
      //   data: result,
      // });
      res.redirect("/");
    })
    .catch((err) => {
      res.json({
        err: err,
        status: "error",
      });
    });
};

exports.fetchAllProducts = (req, res, next) => {
  Product.find({}).then((products) => {
    res.render("store", {
      prod: products,
      title: "My Store",
      path: "/",
    });
  });
};

exports.fetchProductById = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId).then((product) => {
    res.render("product-detail", {
      prod: product,
      title: "Product Details",
      path: "/products/id",
    });
  });
};

exports.deleteProduct = (req, res, next) => {
  const prodId = req.params.productId;

  Product.remove({ _id: prodId })
    .then((result) => {
      console.log(result);
      //res.json({ res: result });
      res.redirect("/");
    })
    .catch((err) => {
      res.render("404", {
        title: "Error",
        path: "/",
      });
    });
};
