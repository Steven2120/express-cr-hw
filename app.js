const express = require("express");

const logger = require("morgan");

const path = require("path");

const app = express();

//imports indexRouter.js
const indexRouter = require("./routes/indexRouter");
const todoRouter = require("./routes/todoRouter");

//middleware
app.use(logger("dev"));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// app.set("views", path.join(__dirname, "views"));

//sets
app.use("/", indexRouter);

app.use("/api/todo", todoRouter);

app.listen(3000, function () {
  console.log(`Server is running on port ${3000}`);
});
