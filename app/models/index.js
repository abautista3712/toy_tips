// Configuration for MySQL database

const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0, //use 0 instead of false, to avoid an error

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.reviews = require("./review.model.js")(sequelize, Sequelize);

//db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
//db.comments = require("./comment.model.js")(sequelize, Sequelize);

//db.tutorials.hasMany(db.comments, { as: "comments" });
/*db.comments.belongsTo(db.tutorials, {
  foreignKey: "tutorialId",
  as: "tutorial",
});*/

module.exports = db;
