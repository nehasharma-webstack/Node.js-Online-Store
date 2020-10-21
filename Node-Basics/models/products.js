const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
  },
});

module.exports = mongoose.model("Product", productSchema);

// const fs = require("fs");
// const path = require("path");
// const filePath = path.join(__dirname, "../data", "products.json");

// const fetchProductsFromFile = (cb) => {
//   fs.readFile(filePath, (err, data) => {
//     if (err) cb([]);
//     else cb(JSON.parse(data));
//   });
// };

// class Product {
//   constructor(prod) {
//     this.name = prod.name;
//     this.pbrand = prod.pbrand;
//     this.price = prod.price;
//   }
//   //Add products in a json file and avoid overwriting
//   add() {
//     this.id = Math.random().toString();
//     fetchProductsFromFile((product) => {
//       product.push(this);
//       fs.writeFile(filePath, JSON.stringify(product), (err) => {
//         if (err) console.log(err);
//         else console.log("File Written Succesfully");
//       });
//     });
//   }

//   static fetchAll(cb) {
//     fetchProductsFromFile(cb);
//   }

//   static fetchById(id, cb) {
//     //[{id:""},{},{}]
//     fetchProductsFromFile((products) => {
//       const product = products.filter((p) => {
//         return p.id === id;
//       });
//       cb(product);
//     });
//   }
// }
// module.exports = Product;
