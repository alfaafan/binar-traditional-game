"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Users, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  History.init(
    {
      played: DataTypes.INTEGER,
      win: DataTypes.INTEGER,
      lose: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "History",
      underscored: true,
    }
  );
  return History;
};
