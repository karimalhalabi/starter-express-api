import { Sequelize } from "sequelize";
import DB from "../../config/database.js";

const { DataTypes } = Sequelize;

const review = DB.define(
  "review",
  {
    Date: {
      type: DataTypes.STRING,
    },
    Price:{
        type: DataTypes.INTEGER,
    }
  },
  {
    freezeTableName: true,
  }
);

export default review;
