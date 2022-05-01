"use strict";

const express = require("express");
// const { appendFile } = require("fs");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const {
  getPets,
  getPetById,
  getPetsByType,
  postComment,
  getComments,
  addUser,
} = require("./handlers");

const PORT = 8001;

const app = express();
app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Methods",
    "OPTIONS, HEAD, GET, PUT, POST, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(morgan("tiny"));
app.use(express.static("./server/images"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", express.static(__dirname + "/"));
app.use(bodyParser.json());

// List of endpoints

// for pets
app.get("/pets", getPets);
app.get("/pet/:_id", getPetById);
app.get("/pets/:type", getPetsByType);

// for comments
app.post("/comment", postComment);
app.get("/comments", getComments);

// for users
app.post("/users", addUser);

app.listen(PORT, () => console.info(`Listening on port ${PORT}`));
