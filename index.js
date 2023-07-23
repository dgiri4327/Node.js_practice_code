// var a = 20;
// var b = 30;
// var c = 40;
// console.warn(a+b+c);
// console.log("Deepak");

// var x = "20";
// if (x == 20) {
//   console.log("Matched"); //Matched (not checked string value here)
// }
// var x = 20;
// if (x === 20) {
//   console.log("Matched"); //Matched (checked string value here)
// }

// ..............for loop............
// var x = '20';
// for (i=0;i<=10;i++) {
//   console.log(i);
// }

// ..............array..............
// import { x } from "./app"; //not import bcz it gives error bcz it will not work on nodejs only work on js
// const app = require("./app"); //it will work and import
// var x = "20";
// const arr = [2, 4, 7, 1, 3, 8, 3];
// console.log(arr);
// console.log(arr[0]);
// console.log(app);
// console.log(app.x);
// console.log(app.z());

// ................filter.............
// const arr = [2, 4, 7, 1, 3, 8, 3];
//  arr.filter((item)=>{
//     console.log(item)
//  })
// let result = arr.filter((item) => {
//   return item === 3;
// });
// console.warn(result);
// let result = arr.filter((item) => {
//   return item >= 4;
// });
// console.warn(result);

// ...........file system (create file)..........
// const fs = require("fs");
// fs.writeFileSync("hello.txt","Code line by line")
// console.log("->>",__dirname); //print directive name
// console.log("->>", __filename); // print file name

// ........or file system......
// const gs = require('fs').writeFileSync;
// gs("xyz.txt","Some code")

// http
// const http = require("http");

// http.createServer((req, resp) => {
//     // resp.write("hello this is deepak giri");
//     resp.write("<h1>hello this is Deepak Giri</h1>");
//     resp.end();
//   }).listen(4500);

// function dataControl(req, resp) {   //Normal function
//   resp.write("<h1>hello, This is Deepak Giri</h1>");
//   resp.end();
// }
// http.createServer(dataControl).listen(4500);

// const dataControl = (req, resp) => {
//   //Arrow function
//   resp.write("<h1>Hello, This is Deepak Giri</h1>");
//   resp.end();
// };
// http.createServer(dataControl).listen(4500);

// http.createServer((req, resp) => {
//     //Arrow function
//     resp.write("<h1>Hello Mr., This is Deepak Giri</h1>");
//     resp.end();
//   })
//   .listen(4500);

// .............checking colors packages........
// const colors = require("colors");
// console.log("Deepak-Giri".yellow);
// console.log("Deepak-Giri".bgBlue);

// console.log(100 + 200);

// .............API call Method...........
// const http = require("http");
// const data = require("./data");
// http
//   .createServer((req, resp) => {
//     resp.writeHead(200, { content: "applicationjson" });
//     resp.write(JSON.stringify(data));
//     resp.end();
//   })
//   .listen(5000);

// console.log(process);
// console.log(process.argv[3]); //it gives 2 location, 1 saved nodejs file location, 2 running location.

// ............creating File system.........
// const fs = require("fs");
// const input = process.argv;
// fs.writeFileSync(input[2], input[3])    //1 input for fileName & 2 for inner text (typeing in terminal).

// ..........add and remove file process........
// if (input[2] == "add") {
//   fs.writeFileSync(input[3], input[4]);
// } else if (input[2] == "remove") {
//   fs.unlinkSync(input[3]);
// } else {
//   console.log("Invalid Output");
// }

// ...........single and multi file creating at same time..........
// const fs = require("fs");
// fs.writeFileSync('apple.txt', 'This is apple file');  // single file creation system.
// const path = require("path"); //file location
// const dirPath = path.join(__dirname, "file"); //file directive
// console.warn(dirPath); // print file location

// ..........creating loop for creating multiple files.......
// for (i = 0; i < 5; i++) {
//   fs.writeFileSync(dirPath+"/hello" + i + ".txt", "this is a simple text file");
// //   fs.writeFileSync(dirPath+`/hello${i}.txt`, "this is a simple text file");   // both line will be same only writing method will change.
// }

// .......directive file read and then list........
// fs.readdir(dirPath, (err, files) => {
//   // console.warn(files);  //print all file name
//   files.forEach((item) => {
//     console.log("File name is ", item);
//   });
// });

// .............CRUD Operation performs..........
// const fs = require("fs");
// const path = require("path");
// const dirPath = path.join(__dirname, 'crud');
// const filePath = `${dirPath}/apple.txt`;

// .......create.......
// fs.writeFileSync(filePath,'This is a simple Text file');  // create file and inner data.

// .......read.......
// fs.readFile(filePath, "utf8", (err, item) => {
//   console.log(item);    //reading inner item data from the file
// });

// ........update.......
// fs.appendFile(filePath, " and file name is apple.txt", (err) => {   // adding some more data in previous data file
//   if (!err) console.log("file is updated");
// });

// ........rename operation.......
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err) =>{
//     if(!err) console.log("file name is updated");
// })

// ..........Delete file.......
// fs.unlinkSync(`${dirPath}/fruit.txt`);

// ..............Asynchronous And Synchronous Examples........
// ..........1. Synchronous.. example..........
// console.log("Start exe....");
// console.log("Logic exe....");
// console.log("Complete exe....");

// .........2. Asynchronous... example-1........
// console.log("Start exe....");

// setTimeout(() => {
//   console.log("Logic exe....");
// }, 2000);

// console.log("Complete exe....");

// ...........2. Asynchronous... example-2..........
// let a=10;
// let b=0;

// setTimeout(()=>{
//     b=20;
// },2000);

// console.log(a+b);

// ............Handle Synchronous Data.........
// let a = 20;
// let b = 0;

// let waitingData = new Promise((resolve, rejecct) => {
//   setTimeout(() => {
//     resolve(30);
//   }, 2000);
// });     // .....execute first...

// //.......then execute after first operation....
// waitingData.then((data) => {
//   b = data;
//   console.log(a + b);
// });

// .........nodejs work process -- call stack, node API, callback Queue..........
// console.log("starting up");

// setTimeout(() => {
//   console.log("2 second log");
// }, 2000);

// setTimeout(() => {
//   console.log("0 second log");
// }, 0);
// console.log("finishing up");

// ............Express JS Intro. (creating web-pages)..........
// const express = require("express");
// const app = express();
// app.get("", (req, resp) => {
//   resp.send("Welcome, This is home page.");
// });
// app.get("/about", (req, resp) => {
//   resp.send("Welcome, This is about page.");
// });
// app.get("/help", (req, resp) => {
//   resp.send("Welcome, This is help page.");
// });
// app.listen(5000);

// .............understanding request(req) and response(resp) parameter...........
// const express = require("express");
// const app = express();
// app.get("", (req, resp) => {
//   console.log("data sent by broswer =>>>", req.query.name);
//   resp.send("Welcome, "+req.query.name);
// });
// app.get("/about", (req, resp) => {
//   resp.send("Welcome, This is about page.");
// });
// app.get("/help", (req, resp) => {
//   resp.send("Welcome, This is help page.");
// });
// app.listen(5000);

// ....................Enter JSON data, HTML tags and Link web-Pages (modify upper code)..........
// const express = require("express");
// const app = express();
// app.get("", (req, resp) => {
//   resp.send(`
//   <h1>Welcome, This is Home Page</h1>
//   <a href="/about">ABOUT</a>
//   <a href="/HELP">HELP</a>
//   `);
// });
// app.get("/about", (req, resp) => {
//   resp.send(`
//   <input type="text" placeholder="User Name" value="${req.query.name}" />
//   <input type="password" placeholder="Password" />
//   <button>Click Me</button>
//   <a href="/">Home</a>
//   `);
// });
// app.get("/help", (req, resp) => {
//   resp.send([
//     {
//       name: "Deepak",
//       email: "deepak12@gmail.com",
//     },
//     {
//       name: "Kumar",
//       email: "kumar12@gmail.com",
//     },
//     {
//       name: "Giri",
//       email: "giri12@gmail.com",
//     },
//   ]);
// });
// app.listen(5000);

// ...........make HTML Pages...
// const express = require("express");
// const path = require("path");
// const app = express();
// const publicPath = path.join(__dirname, "public");
// // console.log(publicPath);
// app.use(express.static(publicPath));
// app.listen(5000);

// ..............apply get method, remove an extension from url, make and apply 404 page..........
// const express = require("express");
// const path = require("path");
// const app = express();
// const publicPath = path.join(__dirname, "public");
// // app.use(express.static(publicPath));
// app.get("", (_, resp) => {
//   resp.sendFile(`${publicPath}/index.html`);
// });
// app.get("/aboutme", (_, resp) => {
//   resp.sendFile(`${publicPath}/about.html`);
// });
// app.get("/help", (_, resp) => {
//   resp.sendFile(`${publicPath}/help.html`);
// });
// app.get("*", (_, resp) => {
//   resp.sendFile(`${publicPath}/404.html`);
// });
// app.listen(5000);

//............. using template engine and ejs template package and setup dynamic routing........
// const express = require("express");
// const path = require("path");
// const app = express();
// const publicPath = path.join(__dirname, "public");

// app.set("view engine", "ejs");

// app.get("", (_, resp) => {
//   resp.sendFile(`${publicPath}/index.html`);
// });
// app.get("/profile", (_, resp) => {
//   const user = {
//     name: "Deepak Giri",
//     email: "dgiri@text.com",
//     city: "Rajkot",
//     skills: ["PHP", "js", "c++", "java", "js"],
//   };
//   resp.render("profile", { user });
// });
// app.get("/login", (_, resp) => {
//   resp.render("login");
// });
// app.get("/aboutme", (_, resp) => {
//   resp.sendFile(`${publicPath}/about.html`);
// });
// app.get("/help", (_, resp) => {
//   resp.sendFile(`${publicPath}/help.html`);
// });
// app.get("*", (_, resp) => {
//   resp.sendFile(`${publicPath}/404.html`);
// });
// app.listen(5000);

// ................Middlewares................
// const express = require("express");
// const reqFilter = require("./middleware"); //routing/connect middleware.js files (if commennt 356 - 365 line of code)
// const app = express();
// const route = express.Router();

// ...middlewares...(..Application-level middleware..)
// const reqFilter = (req, resp, next) => {
//   // console.log("reqFilter");
//   if (!req.query.age) {
//     resp.send("Please provide age");
//   } else if (req.query.age < 18) {
//     resp.send("You can not access this page");
//   } else {
//     next();
//   }
// };
// app.use(reqFilter);
// app.get("/", (req, resp) => {
//   resp.send("Welcome to Home page");
// });
// app.get("/users", (req, resp) => {
//   resp.send("Welcome to Users page");
// });
// app.get("/about", (req, resp) => {
//   resp.send("Welcome to About page");
// });

// ...middlewares...(..Router-level middleware..)
// const reqFilter = (req, resp, next) => {
//   // console.log("reqFilter");
//   if (!req.query.age) {
//     resp.send("Please provide age");
//   } else if (req.query.age < 18) {
//     resp.send("You can not access this page");
//   } else {
//     next();
//   }
// };
// route.use(reqFilter);
// app.get("/", (req, resp) => {
//   resp.send("Welcome to Home page");
// });
// app.get("/users", reqFilter, (req, resp) => {
//   //router-level
//   resp.send("Welcome to Users page");
// });
// app.get("/about", reqFilter, (req, resp) => {
//   //router-level
//   resp.send("Welcome to About page");
// });

// app.get("/users", (req, resp) => {
//   //router-level
//   resp.send("Welcome to Users page");
// });
// route.get("/about", (req, resp) => {
//   //router-level
//   resp.send("Welcome to About page");
// });
// route.get("/contact", (req, resp) => {
//   //router-level
//   resp.send("Welcome to Contact page");
// });
// app.use("/", route);
// app.listen(5000);

// // .................MongoDB Operations..............
// const { MongoClient } = require("mongodb");
// // const MongoClient = require('mongodb').MongoClient;   //both lines are same(418 & 419).

// const url = "mongodb://localhost:27017"; //mongodb path.
// const database = "e-comm";
// const client = new MongoClient(url);

// // ...Common for all connecting from database....
// async function dbConnection() {
//   let result = await client.connect();
//   db = result.db(database);
//   return db.collection("product");
//   // let response = await collection.find({}).toArray();   //finding all the products.
//   // let response = await collection.find({name:'m 40'}).toArray();  //finding any particular product.
//   // console.log(response);
// }

//.......comment upper code (417 - 433) & copy it & paste on Mongodb.js file & then import it.
//.......import data form mongodb.js file.........
// const dbConnection = require("./mongodb");

//.....Read data from MongoDB.....
//.....1st method for handling Promise....
// dbConnection().then((resp) => {
//   // console.warn(resp.find().toArray())   //Promise
//   resp.find().toArray().then((data)=>{  //handle Promise
//   // resp.find({name:'m 40'}).toArray().then((data)=>{   //for single data.
//     console.warn(data);
//   })
// });
// console.warn(dbConnection());
// dbConnection();

//....2nd method for handling promise....
// const main = async () => {
//   // console.log("Main function called");
//   let data = await dbConnection();
//   data = await data.find().toArray();
//   console.warn(data);
// };
// main();

//
//
//
//
// //................Mongoose with node.................
// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/e-comm");

// const productSchema = new mongoose.Schema({
//   name: String,
//   brand: String,
//   price: Number,
//   category: String,
// });

// //
// // Save/Create Data from database in mongodb.
// const saveInDB = async () => {
//   const product = mongoose.model("product", productSchema);
//   let data = new product({
//     name: "IPhone maxx pro",
//     brand: "iPhone",
//     price: 3000,
//     category: "mobile",
//   });
//   let result = await data.save();
//   console.log(result);
// };
// // saveInDB();

// //
// // update data from database in mongodb.
// const updateInDB = async () => {
//   const product = mongoose.model("product", productSchema);
//   let data = await product.updateOne(
//     { name: "note pro" },
//     {
//       $set: {
//         name: "realme note pro",
//         price: 700,
//       },
//     }
//   );
//   console.log(data);
// };
// // updateInDB();

// //
// // Delete data from database in mongodb.
// const deleteIndb = async () => {
//   const product = mongoose.model("product", productSchema);
//   let data = await product.deleteOne({
//     name: "realme note pro",
//   });
//   console.log(data);
// };
// // deleteIndb();

// //
// // Search/find data from database in mongodb.
// const findIndb = async () => {
//   const product = mongoose.model("product", productSchema);
//   let data = await product.find({name:"note pro"});
//   console.log(data);
// }
// // findIndb();

//
//
//
//
//
// for API call (3-files joined 1st this file for api call, 2nd config.js for configuractation & 3rd product.js for define the schema of a product on bases of collection).
// const express = require("express");
// require("./config");
// const product = require("./products");

// const app = express();
// app.use(express.json());

// //---Post API
// app.post("/create", async (req, resp) => {
//   let data = new product(req.body);
//   let result = await data.save();
//   console.log(result);
//   resp.send(result);
// });

// //----Get API
// app.get("/list", async (req, resp) => {
//   let data = await product.find();
//   resp.send(data);
// });

// // ------Delete API
// app.delete("/delete/:_id", async (req, resp) => {
//   let data = await product.deleteOne(req.params);
//   console.log(req.params);
//   resp.send(data);
// });

// //-----Put/Update API
// app.put("/update/:_id", async (req, resp) => {
//   let data = await product.updateOne(req.params, { $set: req.body });
//   console.log(req.params);
//   resp.send(data);
// });

// //
// //----Search API----
// app.get("/search/:key", async (req, resp) => {
//   console.log(req.params.key);
//   let data = await product.find({
//     $or: [
//       { name: { $regex: req.params.key } },
//       { brand: { $regex: req.params.key } },
//       { category: { $regex: req.params.key } },
//     ],
//   });
//   resp.send(data);
// });

// app.listen(5000);

//
//
//
//
//
// // -------------Upload File (with Multer package)---------------
// const express = require("express");
// const multer = require("multer");
// const app = express();

// const upload = multer({
//   storage: multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "uploads");
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + "-" + Date.now() + ".jpg");
//     },
//   }),
// }).single("user_file");

// app.post("/upload", upload, (req, resp) => {
//   resp.send("file Uploaded");
// });
// app.listen(5000);

//
//
//
//
//
//-------------OS Module ---------------
// const os = require('os');
// console.log(os.arch());
// console.log(os.freemem()/(1024*1024*1024)); // find free REM
// console.log(os.totalmem()/(1024*1024*1024)); // find total REM
// console.log(os.hostname()); //hostname
// console.log(os.platform()); //find operating sys.
// console.log(os.userInfo()); // laptop user info.(name..)

//
//
//
//
// // ----------Events and Event Emitter in NodeJS--------
// const express = require("express");
// const EventEmitter = require("events");
// const app = express();

// const event = new EventEmitter();

// let count = 0;
// event.on("countAPI", () => {
//   count++;
//   console.log("event called", count);
// });

// app.get("/", (req, resp) => {
//   resp.send("API called");
//   event.emit("countAPI");
// });
// app.get("/search", (req, resp) => {
//   resp.send("Search API called");
//   event.emit("countAPI");
// });
// app.get("/update", (req, resp) => {
//   resp.send("Update API called");
//   event.emit("countAPI");
// });
// app.listen(5000);

//
//
//
//
//----------------- MySQL --------------------
// const mysql = require("mysql");

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "test",
// });

// con.connect((err) => {
//   if (err) {
//     console.warn("error");
//   } else {
//     console.warn("Connected");
//   }
// });

// con.query("select * from users", (err, result) => {
//   console.warn("result", result);
// });

//
//
// ----------connection done on config.js file---------
// const express = require("express");
// const con = require("./config");
// const app = express();
// app.use(express.jaon());

// //-----GET API------
// app.get("/", (req, resp) => {
//   con.query("select * from users", (err, result) => {
//     if (err) {
//       resp.send("error in api");
//     } else {
//       resp.send(result);
//     }
//   });
// });

// //-------POST API-------
// app.post("/", (req, resp) => {
//   const data = req.body; //insert data from postman webpage....
//   //   const data = { name: "deepak", password: "0813", user_type: "visitor" }; // directly insert data form here.
//   con.query("Insert INTO users SET ?", data, (error, result, field) => {
//     if (error) throw error;
//     resp.send(result);
//   });
// });

// //------PUT/UPDATE API---------
// app.put("/:id", (req, resp) => {
//   //   const data = ["DEEPAK", "0000", "BOSS", 2]; // dynamic changes
//   const data = [
//     req.body.name,
//     req.body.password,
//     req.body.user_type,
//     req.params.id,
//   ]; // static changes
//   con.query(
//     "UPDATE users SET name = ?, password = ?, user_type = ? where id = ?",
//     data,
//     (error, result, field) => {
//       if (error) throw error;
//       resp.send(result);
//     }
//   );
//   //   resp.send("Update api working");
// });

// // ------------DELETE API-----------
// app.delete("/:id", (req, resp) => {
//   con.query("DELETE FROM users WHERE id =" + req.params.id, (error) => {
//     if(error) throw error;
//     resp.send(result);
//   });
// //   resp.send(req.params.id);
// });

// app.listen(5000);

//
//
//
//
//---- NodeJS connect with mongoDB------
// const mongoose = require("mongoose");
const express = require("express");
require("./db/config");
// const cors = require("cors");
const User = require("./db/user");

const app = express();

app.use(express.json());
// app.use(cors());

app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  resp.send(result);
});
app.listen(5000);

// const connectDB = async () => {
//   mongoose.connect("mongodb://localhost:27017/e-comm");
//   const productSchema = new mongoose.Schema({});
//   const product = mongoose.model("product", productSchema);
//   const data = await product.find();
//   console.warn(data);
// };
// connectDB();
