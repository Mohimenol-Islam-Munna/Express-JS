const express = require("express");
const app = express();

const studentRoutes = require("./routes/students");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // res.send("hello world");
  // res.json({ name: "munna" });
  console.log("req object :::: ", req.method);
  res.render("index", { name: "Munna", campus: "PUST" });
});

app.use("/student", studentRoutes);
app.use((req, res) => {
  console.log("This function will execute for all incoming request");
});

app.listen(3000);
