// .................MongoDB Operations..............
//..........Read File Data..................
const { MongoClient } = require("mongodb");
// const MongoClient = require('mongodb').MongoClient;   //both lines are same(418 & 419).

const url = "mongodb://localhost:27017"; //mongodb path.
const database = "e-comm";
const client = new MongoClient(url);

// ...Common for all connecting from database....
async function dbConnection() {
  let result = await client.connect();
  db = result.db(database);
  return db.collection("product");
  // let response = await collection.find({}).toArray();   //finding all the products.
  // let response = await collection.find({name:'m 40'}).toArray();  //finding any particular product.
  // console.log(response);
}

//.....export data to index.js file....
module.exports = dbConnection;
