const express = require("express");
const playerRoutes = express.Router();

// import controllers
const playerController = require("../controllers/player/playerController");

// rotues
playerRoutes.get(
  "/",
  playerController.playerMiddleWare,
  playerController.allPlayer
);
playerRoutes.post("/add-player", playerController.addPlayer);
playerRoutes.get("/:id", playerController.getPlayer);
playerRoutes.patch("/:id", playerController.updatePlayer);
playerRoutes.delete("/:id", playerController.deletePlayer);

module.exports = playerRoutes;
