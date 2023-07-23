const dbConnection = require("./mongodb");

const updateData = async () => {
  let data = await dbConnection();
  //   console.warn(data);
  let result = await data.updateOne( //single update if many product name are same then use 'updateOne', if update all then use 'update' only.
    // { name: "M15" } , { $set: { name: "M15 max pro" } } //update one data in one product
    { name: "note 19" } , { $set: { name: "note 19 pro", brand:"Samsung", price: 400 } } //update many data in one product

    
  );
  console.warn(result);
};
updateData();
