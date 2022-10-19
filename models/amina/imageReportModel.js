import { Sequelize } from "sequelize";
import DB from "../../config/database.js";

const { DataTypes } = Sequelize;

const imagereport = DB.define(
  "imagereport",
  {
    Type: {
      type: DataTypes.STRING,
    },
    Report: {
      type: DataTypes.STRING,
    },
    Image: {
      type: DataTypes.TEXT('long'),
    },
    Notes: {
      type: DataTypes.STRING,
    },
    Date: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default imagereport
