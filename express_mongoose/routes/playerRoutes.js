const express = require("express");
const playerRoutes = express.Router();

// import controllers
const aboutController = require("../controllers/player/aboutController");
const playerController = require("../controllers/player/playerController");

// rotues
playerRoutes.get("/about", aboutController);
playerRoutes.post("/add-player", playerController.addPlayer);
playerRoutes.get(
  "/",
  playerController.playerMiddleWare,
  playerController.allPlayer
);

playerRoutes.get("/:id", playerController.getPlayer);
playerRoutes.patch("/:id", playerController.updatePlayer);
playerRoutes.delete("/:id", playerController.deletePlayer);

module.exports = playerRoutes;
