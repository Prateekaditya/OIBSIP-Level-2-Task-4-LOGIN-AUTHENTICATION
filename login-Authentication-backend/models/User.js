// Required packages
const mongoose = require("mongoose");

/**
 * Creates an Schema object to define the Schema of
 * the model.
 */
const userSchema = new mongoose.Schema({
  //Stores name of type String
  name: {
    type: String,
    required: true,
  },

  //Stores image of type String
  image: String,

  //Stores email of type String. It must be unique
  email: {
    type: String,
    required: true,
    unique: true,
  },

  //Stores the encrypted password of type String.
  password: {
    type: String,
    required: true,
  },

  //Stores the phone number of type Number.
  phone: {
    type: Number,
    required: true,
  },

  //Stores the date of birth of type Date.
  dob: {
    type: Date,
    required: true,
  },
});

//Creates a model from the provided schema
const User = new mongoose.model("user", userSchema);

// Exports the User Object so that other files can import it.
module.exports = User;
