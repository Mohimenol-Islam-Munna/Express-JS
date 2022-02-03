const express = require("express");

const adminRouter = require("./routes/admin");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

// Home Page
app.get("/", (req, res) => {
  console.log(req.method);
  res.render("index", {
    id: 1,
    author: "Mohimenol Islam Munna",
    campus: "PUST",
    designation: "Full Stack Developer",
  });
});

// Admin Page
app.use("/admin", adminRouter);

const PORT = "3000";
app.listen(PORT, (res, err) => {
  console.log(`Server is running at PORT ${PORT}...`);
});
