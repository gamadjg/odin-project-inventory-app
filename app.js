require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cardRoutes = require("./routes/cards-routes");
const webRoutes = require("./routes/main-routes.js");
const dburi = process.env.dbURI;
const port = process.env.PORT;

// Express app configurations.
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("views", "./views");
app.set("view engine", "ejs");

mongoose
	.connect(dburi)
	.then((result) => {
		// we are only listening for requests until after the conneciton to the db is established.
		app.listen(port);
		console.log(`App listening on port ${port}`);
	})
	.catch((err) => {
		console.log(err);
	});

// Setup routes to site traversal and card control
app.use("/cards", cardRoutes);
app.use("/", webRoutes);

// 404 page
app.use((req, res) => {
	res.render("404", { title: "ERROR" });
});

module.exports = app;
