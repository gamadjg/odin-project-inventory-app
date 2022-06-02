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

module.exports = router;
