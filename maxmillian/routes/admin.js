const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Admin Home Page");
});

router.get("/about", (req, res) => {
  res.send("Admin About Page");
});

router.get("/contact", (req, res) => {
  res.send("Admin Contact Page");
});

router.get("/dashboard", (req, res) => {
  res.send("Admin Dashboard Page");
});

module.exports = router;
