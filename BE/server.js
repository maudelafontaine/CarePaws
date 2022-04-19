// API key : NOmj2MmP7VLuGYK8WRS4ltCOmNBsETXT9lIQDAvMlpFpBfQmRl

//////////////

"use strict";

const express = require("express");
const { appendFile } = require("fs");
const morgan = require("morgan");

const PORT = 8000;

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  // Endpoints

  .listen(PORT, () => console.log(`Listening on port 8000`));
