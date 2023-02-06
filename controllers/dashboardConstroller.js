const { Users, Profiles } = require("../models");

// get dashboard
const getDashboard = (req, res) => {
  res.render("dashboard", { title: "Dashboard" });
};

// get all users
const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.render("users", { users, title: "Users" });
  } catch (error) {
    res.status(500).send(error);
  }
};

// get user
const getUser = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: {
        id: req.params.id,
      },
    });
    const profiles = await Profiles.findOne({
      where: {
        user_id: req.params.id,
      },
    });
    res.render("user", { user, profiles, title: "User" });
  } catch (error) {
    res.status(500).send(error);
  }
};

// create user
const createUser = async (req, res) => {
  let { username, password } = req.body;
  try {
    const user = await Users.create({
      username: username,
      password: password,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

// update
const updateData = async (req, res) => {
  const { username } = req.body;
  try {
    const user = await Users.update(
      {
        username: username,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

// delete
const deleteData = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Users.destroy({
      where: {
        id: id,
      },
    });
    res.send("User deleted");
  } catch (error) {
    res.status(500).send(error);
  }
};

// create biodata
const postBiodata = async (req, res) => {
  try {
    const { firstname, lastname } = req.body;
    const biodata = await Profiles.create({
      first_name: firstname,
      last_name: lastname,
      user_id: req.params.id,
    });
    res.send(biodata);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getDashboard,
  getUsers,
  getUser,
  createUser,
  updateData,
  deleteData,
  postBiodata,
};
