// Express web server
// -Configure CORS
// -Initialzie & run Express REST APIs

const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const mysql = require("mysql");

require("dotenv").config();
var connection;

// Serve Static Assets
app.use(express.static("app/views/"));

const corsOptions = {
  origin: "http://localhost:8081",
};
app.use(cors(corsOptions));
// Parse requests of content-type: application/json
app.use(express.json()); //updated version of body-parser
// Parse requests of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); //updated version of body-parser

// Route w MySQL
// console.log(process.env);
if (process.env.JAWSDB_URL) {
  console.log("Connected to JAWSDB_URL");
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  console.log("Connected to local");
  connection = mysql.createPool({
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
    res.send(result);
    console.log("MySQL result successful from FRONT");
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
  console.log("Successfully connection to LOCAL");
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
