// import mongo tools / library
const { MongoClient, ServerApiVersion } = require("mongodb");

//connect to Mongo/Atlas USING a URL Connection String
const { uri } = require('./dbsecrets.js');

const client = new MongoClient(uri);

// connect to sample_mflix database
const db = client.db("sample_mflix");

// Query

// Let's get a specific "movie" collection
// Search by title for "Back to the Future"

db.collection("movies").findOne(
  { title: "Back to the Future" },
  (err, results) => {
    // let's output the results
    if (err) {
        console.log("🤬 ", err)
    }
    console.log("got to here")
    console.log(results);
    client.close()
  }
);
