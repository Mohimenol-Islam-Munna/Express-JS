const mongoose = require("mongoose");

const { Schema } = mongoose;

// define schema
const playerSchema = new Schema({
  name: { type: String, required: true },
  jersy: { type: Number, required: true },
  club: { type: String, required: true },
  country: { type: String, required: true },
  age: { type: Number, required: true },
  position: [],
  cards: {
    yellow: {
      type: Number,
      required: true,
    },
    red: {
      type: Number,
      required: true
    },
  },
  dob: {
    type: Date,
  },
  hasBallonDOr: { type: Boolean, required: true },
  imageUrl: { type: String },
});

// create model
const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
