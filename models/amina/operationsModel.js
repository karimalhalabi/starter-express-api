import { Sequelize } from "sequelize";
import DB from "../../config/database.js";

const { DataTypes } = Sequelize;

const operations = DB.define(
  "operations",
  {
    Operation: {
      type: DataTypes.STRING,
    },
    Description: {
      type: DataTypes.STRING,
    },
    Date: {
      type: DataTypes.STRING,
    }
  },
  {
    freezeTableName: true,
  }
);

export default operations;
