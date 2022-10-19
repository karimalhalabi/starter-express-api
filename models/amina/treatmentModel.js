import { Sequelize } from "sequelize";
import DB from "../../config/database.js";

const { DataTypes } = Sequelize;

const treatment = DB.define(
  "treatment",
  {
    Type: {
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

export default treatment;
