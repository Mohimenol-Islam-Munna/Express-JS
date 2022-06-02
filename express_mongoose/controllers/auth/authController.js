const User = require("../../models/auth/user");
const bcrypt = require("bcrypt");

// ----------- controller handlers -------------
// login
exports.login = (req, res) => {
  res.json({ type: "user login", name: "login" });
};

// register
exports.register = async (req, res) => {
  let password = await bcrypt.hash(req.body.password, 12);

  console.log("password ::", password);

  // create user instance
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: password,
    confirmPassword: req.body.confirmPassword,
    photo: req.body.photo,
  });

  // save user
  user
    .save()
    .then((result) => {
      res.status(200).json({
        status: "success",
        message: "user created successfully",
        data: result,
      });
    })
    .catch((err) => {
      res.status(400).json({
        status: "error",
        message: "user does not created",
        error: err,
      });
    });
};
