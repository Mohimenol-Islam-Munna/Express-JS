const homeController = (req, res) => {
  res.render("player/index", { name: "Messi", clud: "PSG" });
};

module.exports = homeController;
