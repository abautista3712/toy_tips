// Express web server

// Configure CORS
// Initialzie & run Express REST APIs

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(...)

const db = require("./app/models")
// ---USE DURING DEVELOPMENT---
db.sequelize.sync({force:true}).then(() => {
    console.log("Drop and re-sync db.")
})
// ---

// ---USE AFTER DEVELOPMENT---
// db.sequelize.sync()
// ---

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// Parse requests of content-type: application/json
app.use(bodyParser.json());

// Parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Simple Route
app.get("/", (req, res) => {
  res.json({ message: "Welcome!" });
});

// Set PORT, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}.`);
});
