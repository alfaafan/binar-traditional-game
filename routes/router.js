const router = require("express").Router();
const pageRouter = require("./pageRouter");
const authRouter = require("./authRouter");
const dashboardRouter = require("./dashboardRouter");
const roomRouter = require("./roomRouter");

router.use(pageRouter);
router.use(authRouter);
router.use("/dashboard", dashboardRouter);
router.use("/room", roomRouter);

module.exports = router;
