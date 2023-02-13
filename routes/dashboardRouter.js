const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboardConstroller");
const restrict = require("../middlewares/restrict");

router.use(restrict);

// get dashboard
router.get("/", dashboardController.getDashboard);

// get all users
router.get("/users", dashboardController.getUsers);

// get user
router.get("/users/:id", dashboardController.getUser);

// create user
router.post("/users", dashboardController.createUser);

// update data
router.put("/users/:id", dashboardController.updateData);

// delete data
router.delete("/users/:id", dashboardController.deleteData);

// post biodata
router.post("/users/:id", dashboardController.postBiodata);

module.exports = router;
