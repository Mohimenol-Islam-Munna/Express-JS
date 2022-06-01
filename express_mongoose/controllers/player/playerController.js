const Player = require("../../models/player");

exports.playerMiddleWare = (req, res, next) => {
  next();
};

// add player
exports.addPlayer = (req, res) => {
  const player = new Player({
    ...req.body,
  });

  player
    .save()
    .then((result) => {
      res.status(200).json({
        status: "success",
        data: {
          ...result._doc,
        },
      });
    })
    .catch((err) => {
      res.status(400).json({
        stats: "error",
        error: err.errors,
      });
    });
};

// get all player
exports.allPlayer = (req, res) => {
  Player.find({}, "name club country", (err, result) => {
    if (err) {
      res.json({ ...err });
    }
    res.json({ ...result });
  });
};

// get single player
exports.getPlayer = (req, res) => {
  Player.findById(req.params.id, (err, result) => {
    if (err) {
      res.status(400).json({ status: "error", error: err });
    }

    console.log("result ::", result.name);

    res.status(200).json({ status: "success", data: result });
  });
};

// update player
exports.updatePlayer = (req, res) => {
  Player.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, result) => {
      if (err) {
        res.status(400).json({ status: "error", error: err });
      }

      console.log("result ::", result.name);

      res.status(200).json({ status: "success", data: result });
    }
  );
};

// delete player
exports.deletePlayer = async (req, res) => {
  try {
    const result = await Player.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Player Deleted Successfully",
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: "Player Dose Not Deleted",
    });
  }
};
