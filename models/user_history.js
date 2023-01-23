"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User_history.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
      });
    }
  }
  User_history.init(
    {
      time: DataTypes.NOW,
      choice: DataTypes.STRING,
      result: DataTypes.STRING,
      user_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User_history",
    }
  );
  return User_history;
};
