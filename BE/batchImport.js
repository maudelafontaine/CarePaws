// import pets data in MongoDB

const { MongoClient } = require("mongodb");
const assert = require("assert");
require("dotenv").config();
const file = require("file-system");
const fs = require("fs");

const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const pets = JSON.parse(fs.readFileSync("data/pets.json"));

const batchImport = async () => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db("PetFinder");
    await db.collection("pets").insertMany(pets);
  } catch (error) {
    console.log(error);
  }
  client.close();
};

batchImport();
