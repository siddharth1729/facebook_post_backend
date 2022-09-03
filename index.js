/**************************************************
 *             author : siddharth                  *
 **************************************************/

const express = require("express");
const app = express();
const dotenv = require("dotenv");

const databaseconnection = require("./db");
dotenv.config();

//DEFINIG PORT
const PORT = 3333;

//Creating our server
app.use("/", (req, res) => {
  const response = {
    success: true,
    message: "Give me a bottle of rum!",
    discription: "Server is running fine, have fun!",
  };
  res.status(200).json(response);
});

const dbstatus = databaseconnection();
console.log(dbstatus);
try {
  app.listen(PORT);
  console.log("\n========================================");
  console.info(`listning on ==>> http://localhost:${PORT}`);
  console.log("========================================\n");
} catch (error) {
  console.error(error);
}
