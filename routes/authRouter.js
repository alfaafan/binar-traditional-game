const express = require("express");
const router = express.Router();
const { User } = require("../models");
const auth = require("../controllers/authController");

// router.use(express.urlencoded({ extended: false }));

// router.use(express.json());

router.get("/login", auth.getLogin);

router.post("/login", auth.login);

router.get("/register", auth.getRegister);

router.post("/register", auth.register);

module.exports = router;
