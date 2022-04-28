"use-strict";
const { MongoClient } = require("mongodb");
const assert = require("assert");
require("dotenv").config();

const { MONGO_URI } = process.env;

const { v4: uuidv4 } = require("uuid");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Connect to MongoDB
const connectToMongo = async () => {
  const client = await new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("PetFinder");
  return { db, client };
};

// Handler functions :

// Pets handlers
// GET all pets
const getPets = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("PetFinder");
    const result = await db.collection("pets").find().toArray();
    // console.log(result);
    res.status(200).json({
      status: 200,
      message: "Success!",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: "Cannot retrieve pets data",
      data: result,
    });
  }
  client.close();
};

// GET pet by id
const getPetById = async (req, res) => {
  const _id = req.params._id;

  const { db, client } = await connectToMongo();

  await db.collection("pets").findOne({ _id }, (err, result) => {
    result
      ? res.status(200).json({
          status: 200,
          data: result,
          message: `Successfully retrieved pet ${_id}`,
        })
      : res.status(404).json({
          status: 404,
          data: result,
          message: `Cannot retrieve pet ${_id}`,
        });
    client.close();
  });
};

// GET pets by type
const getPetsByType = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const type = req.params.type;

  try {
    await client.connect();
    const db = client.db("PetFinder");
    const result = await db.collection("pets").find({ type }).toArray();
    res.status(200).json({
      status: 200,
      message: "Success!",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: "Cannot retrieve pets by type",
      data: result,
    });
  }
};

// Comments handlers
// POST comment
const postComment = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  const userInput = req.body;

  const comment = {
    _id: uuidv4(),
    comment: userInput.comment,
  };

  try {
    await client.connect();
    const db = client.db("PetFinder");
    const result = await db.collection("comments").insertOne(comment);
    res.status(200).json({
      status: 200,
      message: "Successfully created and added comment to db",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: "Cannot post comment",
      data: result,
    });
  }
};

// GET all comments

// GET comment by id

// DELETE comment by id

// form verification for
// - when sign in
// - when log in

// get pets
// get pet by id
// get pet by characteristics :color, type, breed, gender...
//

module.exports = { getPets, getPetById, getPetsByType, postComment };
