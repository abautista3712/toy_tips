// Express web server
// -Configure CORS
// -Initialzie & run Express REST APIs

const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const mysql = require("mysql");

// Shown if no server connection
app.use(express.static("app/views/"));

const corsOptions = {
  origin: "http://localhost:8081",
};
app.use(cors(corsOptions));
// Parse requests of content-type: application/json
app.use(express.json()); //updated version of body-parser
// Parse requests of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); //updated version of body-parser

// If using Sequelize ORM
// const db = require("./app/models");

// ---USE AFTER DEVELOPMENT---
// db.sequelize.sync();
// ---
// ---USE DURING DEVELOPMENT---
// db.sequelize
//   .sync({ force: true })
//   .then(() => {
//     console.log("Table and model synced successfully!");
//     console.log("Drop and re-sync db.");
//     //run();
//   })
//   .catch(() => {
//     console.log("Error syncing the table and model!");
//   });

// connection.query("SELECT * from reviews", function (err, rows, fields) {
//   if (err) console.log(err);
//   console.log("The solution is: ", rows);
//   connection.end();
// });
// Route w MySQL
if (process.env.JAWSDB_URL) {
  console.log("Connected to JAWSDB_URL");
  var connection = mysql.createConnection({
    HOST: "x8autxobia7sgh74.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    USER: "ea2ypjffdfvb8yao",
    PASSWORD: "vt8g4eb8z215crow",
    DB: "bi1kvz8znfs4e1vp",
  });
} else {
  console.log("Connected to local");
  var connection = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "toy_tips_db",
  });
}

app.get("/api/get", (req, res) => {
  const sqlSearch =
    "SELECT ToyName, AgeRange1, categories, company_name, Character_Development, Kids_Rating, Long_Review, Motor_Movement, product_website, reviewer_longreview, Social_Interaction, ToyTipsRating, Thinking_Skills FROM reviews WHERE Long_Review IS NOT NULL AND Long_Review != ''";

  connection.query(sqlSearch, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
//   app.get("*", function (req, res) {
//     const index = path.join(__dirname, "client/build", "index.html");
//     res.sendFile(index);
//   });
// } else {
// // simple route
app.get("/*", (req, res) => {
  // console.log("Welcome to Toy Tips application.");
  res.sendFile(path.join(__dirname, "app/views/index.html"));
});
// }

require("./app/routes/review.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(
    `Server is running on PORT ${PORT}.\n\rView in browser on "localhost:${PORT}"`
  );
});

// abelard's code ----------------------

/*const controller = require("./app/controllers/review.controller");

const run = async () => {
  const rev1 = await controller.createReview({
    toyName: "Superman Action Figure",
    shortReview: "Pretty good, but I'm a Batman guy.",
  });
};*/
