const dbConnection = require("./mongodb");

const deleteData = async () => {
  // console.log("function called");
  let data = await dbConnection();
  let result = await data.deleteMany({ name: "max pro" }); // if delete many data then use 'deleteMany', if delete only one data then use 'deleteOne'.
  console.warn(result);
  if (result.acknowledged) {
    console.log("record deleted");
  }
};
deleteData();
