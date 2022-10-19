import { Sequelize } from "sequelize";
import DB from "../../config/database.js";

const { DataTypes } = Sequelize;
// console.log(db);

const info = DB.define(
  "info",
  {
    FirstName: {
      type: DataTypes.STRING,
    },
    LastName: {
      type: DataTypes.STRING,
    },
    Address: {
      type: DataTypes.STRING,
    },
    City: {
      type: DataTypes.STRING,
    },
    Country: {
      type: DataTypes.STRING,
    },
    Phone: {
      type: DataTypes.STRING,
    },
    Mobile: {
      type: DataTypes.STRING,
    },
    Email: {
      type: DataTypes.STRING,
    },
    BirthDate: {
      type: DataTypes.STRING,
    },
    Sex: {
      type: DataTypes.STRING,
    },
    TreatmentDoctor: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default info;
