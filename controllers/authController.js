const { Users } = require("../models");

// login
const getLogin = (req, res) => {
  res.render("login", { title: "Login Page" });
};

const postLogin = (req, res) => {
  const { username, password } = req.body;
  Users.findOne({
    where: {
      username: username,
      password: password,
    },
  })
    .then((user) => {
      if (user) {
        res.status(200).redirect("/dashboard");
      } else {
        res.send("username/password salah");
      }
    })
    .catch((err) => console.log(err));
};

// register
const getRegister = (req, res) => {
  res.render("register", { title: "Register Page" });
};

const postRegister = async (req, res) => {
  let { username, password } = req.body;
  try {
    const user = await Users.create({
      username: username,
      password: password,
    });
    res.status(200).redirect("/auth/login");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getLogin,
  postLogin,
  getRegister,
  postRegister,
};
