// ...... API with mongoDB........
//............GET..POST..PUT..DELETE....METHOD..........
const express = require("express");
const dbConnection = require("./mongodb");
const mongodb = require("mongodb");
const app = express();

// when we get the data from postman/request then it will used.
app.use(express.json());

// get api method
app.get("/", async (req, resp) => {
  let data = await dbConnection();
  data = await data.find().toArray();
  //   console.warn(data);
  resp.send(data);
});

// Post api method
app.post("/", async (req, resp) => {
  //   console.log(req.body); //print the data form postman
  let data = await dbConnection();
  let result = await data.insert(req.body);
  resp.send(result);
});

// Put api method(update)
app.put("/:name", async (req, resp) => {
  // console.log(req.body);
  let data = await dbConnection();
  // let result = await data.updateOne(
  //   { name: "note 19 pro" },
  //   { $set: { price: 500 } }
  // );
  let result = await data.updateOne(
    { name: req.params.name }, // we can use params/body
    { $set: req.body }
  );
  console.log(result);
  resp.send({ result: "Updated" });
});

// Delete api method
app.delete("/:id", async (req, resp) => {
  console.log(req.params.id);
  const data = await dbConnection();
  const result = await data.deleteMany({
    _id: new mongodb.ObjectId(req.params.id),
  });
  resp.send(result);
});

app.listen(5000);
