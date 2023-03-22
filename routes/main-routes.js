const express = require("express");
const router = express.Router();
// const cardsController = require("../controllers/cards-controller.js");

router.get("/", (req, res) => {
	res.render("how-to-play", { title: "How to Play" });
});

router.get("/how-to-play", (req, res) => {
	res.render("how-to-play", { title: "How to Play" });
});

router.get("/rules", (req, res) => {
	res.render("rules", { title: "Rules" });
});

router.get("/card-creation", (req, res) => {
	res.render("card-creation", { title: "Create Your Own Card!" });
});

module.exports = router;
