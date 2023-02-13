const express = require("express");
const app = express();
const port = 3000;
const dotenv = require("dotenv");

dotenv.config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("view engine", "ejs");

app.use(express.static("public"));

const passport = require("./lib/passport");
app.use(passport.initialize());

const router = require("./routes/router");
app.use(router);

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
