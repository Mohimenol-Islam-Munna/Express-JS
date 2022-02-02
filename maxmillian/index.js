const express = require("express");
const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  console.log("express js in middleware");
  next();
});

app.use((req, res, next) => {
  console.log("second middleware");
  res.send("Express js Middleware");
});

app.listen(3000, (err) => {
  console.log(`Server is running at PORT ${PORT}`);
});
