const Cards = require("../models/cards-schema");

const cards_index = (req, res) => {
	const cardType = req.params.id;
	switch (cardType) {
		case "all":
			Cards.find().then((result) => {
				res.render("cards", { title: "Cards", cardsList: result });
			});
			break;
		case "regular":
			Cards.find({ card_type: { $eq: "regular" } }).then((result) => {
				res.render("cards", { title: "Cards", cardsList: result });
			});
			break;
		case "characters":
			Cards.find({ card_type: { $eq: "character" } }).then((result) => {
				res.render("cards", { title: "Characters", cardsList: result });
			});
			break;
		case "equipables":
			Cards.find({ card_type: { $eq: "equipment" } }).then((result) => {
				res.render("cards", { title: "Equipment", cardsList: result });
			});
			break;
		case "traps":
			Cards.find({ card_type: { $eq: "traps" } }).then((result) => {
				res.render("cards", { title: "Traps", cardsList: result });
			});
			break;
		default:
			res.render("cards", { title: "Cards", cardsList: [] });
			break;
	}
};

const create_card = (req, res) => {
	const card = new Cards({
		card_name: req.body.card_name,
		card_description: req.body.card_description,
		card_set: "new card",
		card_type: req.body.card_type,
	});
	card
		.save()
		.then((result) => {
			// Redirect (refresh) tasks page which will list the new db data.
			res.redirect("cards/all");
			console.log("new task has been added to the db");
		})
		.catch((err) => {
			console.log(err);
		});
};

const delete_card = (req, res) => {
	const id = req.params.id;
	// mongoose method called to delete task in db, task specified by its id
	Cards.findByIdAndDelete(id)
		.then(() => {
			// respond to requets with a json redirect to /tasks
			res.json({ redirect: "/cards/all" });
		})
		.catch((error) => {
			console.log(error);
		});
};

module.exports = {
	cards_index,
	create_card,
	delete_card,
};
