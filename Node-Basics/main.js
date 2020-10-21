// objects
const order = {
    id: 101,
    product: "Mobile",
    price: 40000,
    getPrice: function () {
        console.log("Order Price: " + this.price);
    },
};

order.product = "Laptop";
//order.getPrice();
console.log(order);