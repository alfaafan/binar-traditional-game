const { User, User_biodata } = require("../models");

// get dashboard
const getDashboard = (req, res) => {
  res.render("dashboard");
};

// get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.render("users", { users });
  } catch (error) {
    res.status(500).send(error);
  }
};

// get user
const getUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.render("user", { user });
  } catch (error) {
    res.status(500).send(error);
  }
};

// create user
const createUser = async (req, res) => {
  let { username, password } = req.body;
  try {
    const user = await User.create({
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
    const user = await User.update(
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
    const result = await User.destroy({
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
    const biodata = await User_biodata.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
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
