const router = require("express").Router();
const room = require("../controllers/roomController");
const restrict = require("../middlewares/restrict");

router.get("/", restrict, room.index);

router.post("/create", restrict, room.create);

router.post("/join", restrict, room.join);

module.exports = router;
