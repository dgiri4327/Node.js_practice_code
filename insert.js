const dbConnection = require("./mongodb.js");

const insert = async () => {
  const db = await dbConnection();
  // const collection = db.collection("product");
  const result = await db.insertOne({
    name: "note 15",
    brand: "vivo",
    price: 300,
    category: "mobile",
  });
  // console.log(db);
  console.log(result);
};

insert();
