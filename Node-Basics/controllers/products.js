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
      // res.json({
      //   status: "Success",
      //   message: "Product added successfully",
      //   data: result,
      // });
      res.redirect("/admin");
    })
    .catch((err) => {
      // res.json({
      //   status: "error",
      //   message: "Can't add product",
      // });
      res.render("404", {
        title: "Error",
      });
    });
};

//FEtch all products from DB
exports.fetchAllProducts = (req, res, next) => {
  Product.find()
    .then((result) => {
      // res.json({
      //   status: "success",
      //   message: "Products fetched successfully",
      //   data: result,
      // });
      res.render("store", {
        prod: result,
        path: "/",
        title: "My Store",
      });
    })
    .catch((err) => {
      res.render("404", {
        title: "Error",
      });
    });
};

exports.fetchProductById = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then((result) => {
      // res.json({
      //   status: "success",
      //   data: result,
      // });

      res.render("product-detail", {
        title: "Product Details",
        path: "/",
        prod: result,
      });
    })
    .catch((err) => {
      // res.json({
      //   status: "error",
      //   message: "Could not find the product",
      // });
      res.render("404", {
        title: "Error",
      });
    });
};

exports.updateProduct = (req, res, next) => {
  const name = req.body.name;
  const price = req.body.price;
  const brand = req.body.brand;
  const rating = req.body.rating;
  const id = req.params.productId;
  Product.update(
    { _id: id },
    {
      $set: {
        name: name,
        price: price,
        brand: brand,
        rating: rating,
      },
    }
  ).then((result) => {
    res
      .json({
        status: "success",
        message: "Product updated successfully",
        data: result,
      })
      .catch((err) => {
        res.json({
          status: "error",
          message: "Error in updating the product",
        });
      });
  });
};
