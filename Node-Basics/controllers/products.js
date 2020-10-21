const Product = require("../models/products");

exports.addProductForm = (req, res, next) => {
  res.render("add-product", {
    title: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  const name = req.body.name;
  const price = req.body.price;
  const brand = req.body.brand;
  const rating = req.body.rating;
  const products = new Product({
    name: name,
    price: price,
    brand: brand,
    rating: rating,
  });
  products
    .save()
    .then((result) => {
      res.json({
        status: "Success",
        message: "Product added successfully",
        data: result,
      });
      // res.redirect("/");
    })
    .catch((err) => {
      res.json({
        status: "error",
        message: "Can't add product",
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

exports.fetchProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId).then((product) => {
    res.render("product-detail", {
      prod: product,
      title: "Product Details",
      path: "/products/id",
    });
  });
};
