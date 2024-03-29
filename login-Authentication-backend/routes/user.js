// Required packages
const express = require("express");
const user = require("../controllers/user.js");

/**
 * A router object is an isolated instance of middleware and routes.
 * You can think of it as a “mini-application,”
 * capable only of performing middleware and routing functions.
 */
const router = express.Router();

/**
 * This route handles get request on 'getAllUsers'.
 * It responds with an array of object having
 *   name - String
 *   email - String
 *   image - String
 */
router.get("/getAllUsers", user.getAllUsers);

/**
 * This route handles post request on 'register'.
 * This routes requires these :-
 *   name - String (required)
 *   image - String (optional)
 *   email - String (required)
 *   password - Strinig (required)
 *   phone - String of digits (required)
 *   dob - Date (required)
 *
 */
router.post("/register", user.register);

/**
 * This route handles post request on 'register'.
 * This routes requires these :-
 *   email - String (required)
 *   password - String (required)
 *
 */
router.post("/login", user.login);

// Exports router so that it can be imported elsewhere.
module.exports = router;
