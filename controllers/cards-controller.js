const regularCards = require("../models/cards-schema");
//const cards = require("../temp-db");

// const {
// 	defaultConfiguration,
// } = require("../../../../nodejs2/net-ninja-yt-tutorials/mdm-tutorials/express-locallibrary-tutorial/app");

const cards_index = (req, res) => {
	const results = [
		{
			card_name: "Beer",
			card_type: "regular",
			card_description: "Regain one life point",
			card_set: "Standard",
		},
	];

	const cardType = req.params.id;
	switch (cardType) {
		case "regular":
			regularCards.find().then((result) => {
				res.render("cards", { title: "Cards", cardsList: result });
			});
			break;
		case "characters":
			res.render("cards", { title: "Characters", cardsList: results });
			break;
		case "equipables":
			res.render("cards", { title: "Equipables", cardsList: results });
			break;
		case "traps":
			res.render("cards", { title: "Traps", cardsList: results });
			break;
		default:
			res.render("cards", { title: "Cards", cardsList: results });
			break;
	}
};
// const cards_index = (req, res) => {
// 	Tasks.find()
// 		.then((result) => {
// 			res.render("tasks", { title: "Tasks", todoList: result });
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		});
// };

/* 
	Each post request creates an object organized to fit the Tasks schema.
	The task is then pushed to the connected db, followed by a redirect to the tasks page.
	The redirect acts as a refresh for the /tasks page where the db results will be pulled again along with the new task.
*/
// const tasks_create_post = (req, res) => {
// 	// Task created from schema.
// 	const task = new Tasks({
// 		title: req.body.description,
// 		due: req.body.dueDate,
// 		priority: req.body.priority,
// 	});
// 	// Push new task to db.
// 	task
// 		.save()
// 		.then((result) => {
// 			// Redirect (refresh) tasks page which will list the new db data.
// 			res.redirect("tasks");
// 			console.log("new task has been added to the db");
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		});
// };

// // upon request, URI contains attribute witch is the passed id of the task to delete.
// const tasks_delete = (req, res) => {
// 	const id = req.params.id;
// 	// mongoose method called to delete task in db, task specified by its id
// 	Tasks.findByIdAndDelete(id)
// 		.then(() => {
// 			// respond to requets with a json redirect to /tasks
// 			res.json({ redirect: "/tasks" });
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 		});
// };

module.exports = {
	cards_index,
};
