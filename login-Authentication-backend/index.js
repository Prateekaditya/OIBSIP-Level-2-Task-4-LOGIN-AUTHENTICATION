/**
 * All required packages are generally imported
 * at the top.
 */
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const user = require("./routes/user.js");

// This loads the .env file into process.env object.

dotenv.config();

// Stores the URI
const MONGODBURI = process.env.MONGODBURI;

/**
 * If any PORT variable is stored in the .env then that gets
 * stored in the PORT variable. If not 5000 is stored.
 */
const PORT = process.env.PORT || 5000;

/**
 * Creates an Express application.
 * The express() function is a top-level function exported by the express module.
 */
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

// Middleware that parses json data
app.use(bodyParser.json());

app.use("/user", user);

/**
 * The mongooses' connect method requires the URI to be passed
 * for the connection to be made.
 * Once the connection is made, the web server starts.
 */
mongoose
  .connect(MONGODBURI)
  .then(() => {
    console.log("Connection to the database is successfully made.");
    app.listen(PORT, () => {
      console.log("The server is listening on port " + PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
