const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema(
	{
		card_name: {
			type: String,
			required: true,
		},
		card_type: {
			type: String,
			required: false,
		},
		card_description: {
			type: String,
			required: false,
		},
		card_set: {
			type: String,
			required: false,
		},
	},
	{ timestampes: true }
);

const CardsModel = mongoose.model("cards-regular", cardSchema);

module.exports = CardsModel;
