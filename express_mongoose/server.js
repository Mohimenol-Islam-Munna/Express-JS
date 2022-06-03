const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// database config
const dbConfig = require("./database/databaseConfig");
// import routes
const playerRoutes = require("./routes/playerRoutes");
const authRouter = require("./routes/authRoutes");

// body parser
app.use(bodyParser.urlencoded({ extended: true }));

// set template engine
app.set("view engine", "ejs");
// set static file
app.use(express.static("public"));

// --------- routes -----------
// auth routes
app.use("/", authRouter);

// player routes
app.use("/player", playerRoutes);

// home route
app.get("/", (req, res) => {
  res.render("index", { name: "Mohimenol Islam Munna", campus: "PUST" });
});

// // database connection
// mongoose.connect(dbConfig.URL, (err) => {
//   if (err) {
//     console.log("mongodb connection does not successfull");
//   } else {
//     console.log("mongodb connection successfull");
//     app.listen(dbConfig.PORT, () => {
//       console.log(`Your server is running at port ${dbConfig.PORT} ...`);
//     });
//   }
// });

// database connection
mongoose
  .connect(dbConfig.URL)
  .then(() => {
    console.log("database connection successfull");

    app.listen(dbConfig.PORT, () => {
      console.log(`Your server is running at port ${dbConfig.PORT} ...`);
    });
  })
  .catch((err) => {
    console.log("database connection error ::", err);
  });
