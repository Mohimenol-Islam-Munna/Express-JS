const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("student home");
});

router.get("/about", (req, res) => {
  res.send("about student");
});

router.get("/contact", (req, res) => {
  res.send("student contact");
});


module.exports = router