/**************************************************
 *             author : siddharth                  *
 **************************************************/

const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");

module.exports = databaseconnection = () => {
  try {
    const uri =
      "mongodb+srv://sid:sid@cluster0.dbrwq10.mongodb.net/?retryWrites=true&w=majority";
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    };
    mongoose
      .connect(uri, connectionParams)
      .then(() => {
        console.log("Connected to database suscessfully");
      })
      .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
      });
  } catch (error) {
    console.log(error);
  }
};
