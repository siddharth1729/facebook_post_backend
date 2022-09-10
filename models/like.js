/**************************************************
*             author : siddharth                  *
**************************************************/ 

const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  post_id: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  id: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
});

module.exports = mongoose.model("Like", likeSchema);

