const mongoose = require("mongoose");
const validator = require("validator");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please input your name"],
  },
  email: {
    type: String,
    required: [true, "Please input your name"],
    unique: [true, "Email adrress must be unique"],
    lowercase: true,
    validate: [validator.isEmail, "Please provide valid email address"],
  },
  photo: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "Please input your name"],
    unique: [true, "Password must be unique"],
    minlength: 8,
  },
  confirmPassword: {
    type: String,
    required: [true, "Please input your name"],
    unique: [true, "Confirm password must be unique"],
    minlength: 8,
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "confirm password must be same with password",
    },
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
