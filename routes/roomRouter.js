const router = require("express").Router();
const room = require("../controllers/roomController");
const restrict = require("../middlewares/restrict");

router.use(restrict);

router.get("/", room.index);

router.post("/create", room.create);

router.post("/join", room.join);

module.exports = router;
