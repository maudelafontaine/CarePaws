// tells what to do in the DB

const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// form verification for
// - when sign in
// - when log in

// get pets
// get pet by id
// get pet by characteristics :color, type, breed, gender...
//

module.exports = {};
