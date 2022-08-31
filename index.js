/**************************************************
 *             author : siddharth                  *
 **************************************************/

const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

//DEFINIG PORT
const PORT = 3300;

//Creating our server
app.get("/", (req, res) => {
  const response = { success: true, message: "Give me a bottle of rum!" };
  res.status(200).json(response);
});
app.listen(PORT);

console.info(`listning on ==>> http://localhost:${PORT}`);
