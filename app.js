require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cardRoutes = require("./routes/cards-routes");
// const taskRoutes = require("./routes/task-routes");
// .env is ignored, contains port and dburi for mongodb.
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
	})
	.catch((err) => {
		console.log(err);
	});

// Middleware. console log method type and date for every request.
const myLogger = function (req, res, next) {
	console.log("Request Method: " + req.method);
	console.log("Request date: " + new Date());

	// NEED TO ADD next() to middleware that isn't returning any response.
	next();
};
// Calling the middleware
app.use(myLogger);

app.get("/", (req, res) => {
	res.render("how-to-play", { title: "How to Play" });
});

app.get("/how-to-play", (req, res) => {
	res.render("how-to-play", { title: "How to Play" });
});

app.get("/rules", (req, res) => {
	res.render("rules", { title: "Rules" });
});

app.use("/cards", cardRoutes);

app.get("/card-creation", (req, res) => {
	res.render("card-creation", { title: "Create Your Own Card!" });
});

//
//app.use("/tasks", taskRoutes);

// default 404 page
app.use((req, res) => {
	//res.sendFile("./views/404.html", { root: __dirname });
	res.render("404", { title: "ERROR" });
});

module.exports = app;
