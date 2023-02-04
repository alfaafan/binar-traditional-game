const express = require("express");
const router = express.Router();
const { User } = require("../models");
const authController = require("../controllers/authController");

router.use((req, res, next) => {
  console.log("router level middleware for auth");
  next();
});

router.use(express.urlencoded({ extended: false }));

router.use(express.json());

router.get("/login", authController.getLogin);

router.post("/login", authController.postLogin);

router.get("/register", authController.getRegister);

router.post("/register", authController.postRegister);

module.exports = router;
