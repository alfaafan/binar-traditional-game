const router = require("express").Router();
const pageController = require("../controllers/pageController");

router.get("/", pageController.index);

router.get("/game", pageController.game);

module.exports = router;
