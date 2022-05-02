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
  client.close();
};

// Comments handlers
// POST comment
const postComment = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  const userInput = req.body;

  let comment = {
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
  client.close();
};

// GET all comments

const getComments = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db("PetFinder");
    const result = await db.collection("comments").find().toArray();
    res.status(200).json({
      status: 200,
      message: "Successfully retrieved comments",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: "Cannot retrieve comments",
      result: data,
    });
  }
  client.close();
};

// GET comment by id

// DELETE comment by id

// Sign up form handlers
// POST (add) new user
const addUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  const data = req.body;

  const userDetails = {
    _id: uuidv4(),
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    country: data.country,
    postalCode: data.postalCode,
    password: data.password,
  };

  try {
    await client.connect();
    const db = client.db("PetFinder");
    const result = await db.collection("users").insertOne(userDetails);
    res.status(200).json({
      status: 200,
      message: "Successfully created new user",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: "Cannot add new user to db",
      data: result,
    });
  }
  client.close();
};

// Sign in form handlers
// GET all users
const getUsers = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db("PetFinder");
    const result = await db.collection("users").find().toArray();
    res.status(200).json({
      status: 200,
      message: "Successfully retrieved all users",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: "Cannot retrieve users",
      data: result,
    });
  }
  client.close();
};

// GET user by id

module.exports = {
  getPets,
  getPetById,
  getPetsByType,
  postComment,
  getComments,
  addUser,
  getUsers,
};
