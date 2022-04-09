const express = require("express");
const app = express();

const studentRoutes = require("./routes/students");

app.set("view engine", "ejs");

app.use((req, res, next) => {
  console.log("This function will execute for all incoming request");
  next();
});

app.use((req, res, next) => {
  res.send("<h2>2 This function will execute for all incoming request</h2>");
});

app.get("/", (req, res) => {
  // res.send("hello world");
  // res.json({ name: "munna" });
  console.log("req object :::: ", req.method);
  res.render("index", { name: "Munna", campus: "PUST" });
});

app.use("/student", studentRoutes);

app.listen(3000);
