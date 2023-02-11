const router = require("express").Router();
const room = require("../controllers/roomController");

router.get("/", room.index);

module.exports = router;
