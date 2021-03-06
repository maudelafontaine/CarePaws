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
  getCommentById,
  deleteComment,
  addUser,
  getUsers,
  getFavoritePets,
  addPetToFavorites,
  updateUser,
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

// for pets in Cats, Dogs and Pets pages
app.get("/pets", getPets);
app.get("/pet/:_id", getPetById);
app.get("/pets/:type", getPetsByType);

// for favorite pets page
app.get("/favorites", getFavoritePets);
app.post("/favorite", addPetToFavorites);

// for comments section
app.post("/comment/:_id", postComment);
app.get("/comments", getComments);
app.get("/comment/:_id", getCommentById);
app.delete("/comments/:_id", deleteComment);

// for users when signing up/loging in
app.post("/user", addUser);
app.get("/users", getUsers);

// for profile page
// app.put("profile/:_id")
app.put("/user/:_id", updateUser);

app.listen(PORT, () => console.info(`Listening on port ${PORT}`));
