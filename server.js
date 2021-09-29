// Express web server

// Configure CORS
// Initialzie & run Express REST APIs

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.static("app/views/"));

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json()); //updated version of body-parser

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); //updated version of body-parser

const db = require("./app/models");

// ---USE AFTER DEVELOPMENT---
db.sequelize.sync();
// ---
// ---USE DURING DEVELOPMENT---
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
//   //run();
// });

// // simple route
app.get("/*", (req, res) => {
  // console.log("Welcome to Toy Tips application.");
  res.sendFile(path.join(__dirname, "app/views/index.html"));
});

require("./app/routes/review.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// ---USE DURING DEVELOPMENT---
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
//   //run();
// });

// ---USE AFTER DEVELOPMENT---
db.sequelize.sync()
// ---

// abelard's code ----------------------

/*const controller = require("./app/controllers/review.controller");

const run = async () => {
  const rev1 = await controller.createReview({
    toyName: "Superman Action Figure",
    shortReview: "Pretty good, but I'm a Batman guy.",
  });
};*/
