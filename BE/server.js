"use strict";

const express = require("express");
// const { appendFile } = require("fs");
const morgan = require("morgan");
const { getPets, getPetById, getPetsByType } = require("./handlers");

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
app.use(express.static("./server/assets"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", express.static(__dirname + "/"));

// Endpoints
app.get("/pets", getPets);
app.get("/pet/:_id", getPetById);
app.get("/pets/:type", getPetsByType);

app.listen(PORT, () => console.info(`Listening on port ${PORT}`));
