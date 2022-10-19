import { Sequelize } from "sequelize";

const DB = new Sequelize('freedb_AminaMedical', 'freedb_karim', 'A@Uq33&*Ra397mw', {
    host: "sql.freedb.tech",
    dialect: "mysql"
});

// const db = new Sequelize('aminamedical', 'karimalhalabi', 'serene01@AL', {
//     host: "db4free.net",
//     dialect: "mysql"
// });

export default DB;