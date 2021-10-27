// Exports configuring parameters for MySQL connection & Sequelize
// module.exports = {
//   HOST: "localhost",
//   USER: "root",
//   PASSWORD: "",
//   DB: "toy_tips_db",
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000,
//   },
// };

// Exports configuring parameters for MySQL on Heroku
module.exports = {
  HOST: "us-cdbr-east-04.cleardb.com",
  USER: "be96f562157931",
  PASSWORD: "6b2d0dc2",
  DB: "heroku_dd637509444d9b4",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
