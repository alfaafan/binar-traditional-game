const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("view engine", "ejs");

app.use(express.static("public"));

const pageRouter = require("./routes/pageRouter");
app.use(pageRouter);

const authRouter = require("./routes/authRouter");
app.use(authRouter);

const dashboardRouter = require("./routes/dashboardRouter");
app.use("/dashboard", dashboardRouter);

const roomRouter = require("./routes/roomRouter");
app.use("/room", roomRouter);

app.use((err, req, res, next) => {
  res.status(500).json({
    status: "fail",
    error: err.message,
  });
});

app.use((req, res, next) => {
  res.status(404).render("404", { title: "404 Not Found" });
});

app.listen(port, async () => {
  console.log(`Server listening on port ${port}`);
});
