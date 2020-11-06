const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const mongoose = require("mongoose");
const adminRoutes = require("./Routes/admin");
const storeRoutes = require("./Routes/store");
const authRoutes = require("./Routes/auth");
const path = require("path");

const app = express(); //initialized express app object

app.set("view engine", "ejs");
app.set("views", "Views");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

//Creating sessions
app.use(
  session({
    secret: "my first secret",
    saveUninitialized: false,
    resave: false,
  })
);

app.use("/admin", adminRoutes); // filtering
app.use(storeRoutes);
app.use("/auth", authRoutes);

app.use((req, res, next) => {
  // res.statusCode = 404;
  // res.send("Page not found");
  // res.status(404).send(`<h1>Page Not Found!</h1>`);
  res.render("404", {
    title: "Page Not Found",
    path: "/error",
    isAuthenticated: req.isLoggedIn,
  });
});

mongoose
  .connect("mongodb://localhost:27017/myDemoDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(5000);
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log("cant connect to Database", err);
  });
