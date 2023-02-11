const router = require("express").Router();
const pageController = require("../controllers/pageController");
const restrict = require("../middlewares/restrict");

router.get("/", pageController.index);

router.get("/game", pageController.game);

router.get("/whoami", restrict, pageController.whoami);

module.exports = router;
