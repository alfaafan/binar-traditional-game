module.exports = {
  index: (req, res) => {
    res.render("index", { title: "Traditional Game" });
  },
  game: (req, res) => {
    res.render("game", { title: "Rock-Paper-Scissors" });
  },
};
