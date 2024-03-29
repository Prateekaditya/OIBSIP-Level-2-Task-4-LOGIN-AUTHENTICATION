// Import required packages
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// Imports User Model
const User = require("../models/User.js");

const dotenv = require("dotenv");
dotenv.config();

// Method to handle getAllUsers requests.
const getAllUsers = async (req, res) => {
  try {
    // Returns every users.
    const users = await User.find({});
    const mappedUsers = users.map((element) => {
      // Return an object containing name, image
      // and email
      return {
        name: element.name,
        image: element.image,
        email: element.email,
      };
    });
    res.json(mappedUsers);
  } catch (err) {
    console.log(err);
  }
};

// Method to handle register requests.
const register = async (req, res) => {
  try {
    const data = req.body;
    // Creates a hash for the password
    const password = await bcrypt.hash(data.password, 10);
    // Converts the string to number
    const phone = Number(data.phone);
    // Converts the string to Date object
    const dob = new Date(data.dob);

    const user = new User({
      name: data.name,
      image: data.image,
      email: data.email,
      password: password,
      phone: phone,
      dob: dob,
    });
    // Updates the database
    await user.save();

    console.log("user added");

    // Send an JSON with the id of the newly created user object.
    res.json({
      id: user._id,
    });
  } catch (err) {
    console.log(err);
  }
};

// Method to handle login requests.
const login = async (req, res) => {
  try {
    const data = req.body;
    // Searches for a user with the given email
    const user = await User.findOne({ email: data.email });

    // If that user exists
    if (user == null) {
      res.json({
        error: "Incorrect email!",
      });
    }
    // If the password is incorrect
    else if (bcrypt.compare(data.password, user.password) == false) {
      res.json({
        error: "Incorrect password!",
      });
    }
    // If the username and the password are correct
    else {
      // Creates an token from the email object and the secret from the .env file
      const token = jwt.sign({ email: user.email }, process.env.SECRET, {
        expiresIn: "1d",
      });
      //Send the token
      res.json({ token: token });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllUsers,
  register,
  login,
};
