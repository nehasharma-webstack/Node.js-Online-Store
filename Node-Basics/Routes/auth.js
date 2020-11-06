const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");

//  /auth/
router.get("/login", authController.getLoginPage);
router.post("/login", authController.postLogin);
router.get("/logout", authController.postLogout);

module.exports = router;
