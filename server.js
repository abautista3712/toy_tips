// Express web server

// Configure CORS
// Initialzie & run Express REST APIs

// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();
// app.use(...)

const db = require("./models");
const controller = require("./controllers/tutorial.controller");

const run = async () => {
  const tut1 = await controller.createTutorial({
    title: "Tut#1",
    description: "Tut#1 Description",
  });
};
// ---USE DURING DEVELOPMENT---
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
  run();
});
// ---

// ---USE AFTER DEVELOPMENT---
// db.sequelize.sync()
// ---

// var corsOptions = {
//   origin: "http://localhost:8081",
// };

// app.use(cors(corsOptions));

// // Parse requests of content-type: application/json
// app.use(bodyParser.json());

// // Parse requests of content-type: application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

// // Simple Route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome!" });
// });

// // Set PORT, listen for requests
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on PORT ${PORT}.`);
// });
