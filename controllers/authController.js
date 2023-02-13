const { Users } = require("../models");

function format(user) {
  const { id, username } = user;

  return {
    id,
    username,
    accessToken: user.generateToken(),
  };
}

module.exports = {
  getRegister: (req, res) => {
    res.render("register", { title: "Register Page" });
  },
  register: async (req, res) => {
    try {
      const user = await Users.register(req.body);
      res.send(user);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  getLogin: (req, res) => {
    res.render("login", { title: "Login Page" });
  },
  login: async (req, res) => {
    try {
      const user = await Users.authenticate(req.body);
      res.json(format(user));
    } catch (err) {
      res.status(403).json({
        message: err,
      });
    }
  },
};
