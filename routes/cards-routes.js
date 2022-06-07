const express = require("express");
const router = express.Router();
const cardsController = require("../controllers/cards-controller.js");

router.get("/:id", (req, res) => {
	try {
		cardsController.cards_index(req, res);
	} catch (error) {
		console.log(error);
	}
});

router.post("/", (req, res) => {
	try {
		cardsController.create_card(req, res);
	} catch (error) {
		console.log(error);
	}
});

router.delete("/:id", (req, res) => {
	cardsController.delete_card(req, res);
});

module.exports = router;
