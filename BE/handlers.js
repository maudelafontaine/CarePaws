"use-strict";
const { MongoClient } = require("mongodb");
const assert = require("assert");
require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Connect to MongoDB
const connectToMongo = async () => {
  const client = await new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("PetFinder");
  return { client, db };
};

// GET all pets

const getPets = async (req, res) => {
  const { client, db } = connectToMongo();
  try {
    const result = await db.collection("pets").find().toArray();
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

// if (result.length > 0) {
//   return res.status(200).json({
//     status: 200,
//     message: "Success!",
//     data: result,
//   });
// } else {
//   return res.status(400).json({
//     status: 400,
//     message: "Cannot retrieve pets data",
//     data: result,
//   });
// }
//   client.close();
// };

// form verification for
// - when sign in
// - when log in

// get pets
// get pet by id
// get pet by characteristics :color, type, breed, gender...
//

module.exports = { getPets };
