const { User } = require("../models");

// login
const getLogin = (req, res) => {
  res.render("login");
};

const postLogin = (req, res) => {
  const { username, password } = req.body;
  User.findOne({
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
  res.render("register");
};

const postRegister = async (req, res) => {
  let { username, password } = req.body;
  try {
    const user = await User.create({
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
