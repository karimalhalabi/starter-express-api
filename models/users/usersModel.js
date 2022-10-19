import { Sequelize } from "sequelize";
import DB from "../../config/database.js";

const { DataTypes } = Sequelize;

const users = DB.define(
  "users",
  {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    }
  },
  {
    freezeTableName: true,
  }
);

export default users;
