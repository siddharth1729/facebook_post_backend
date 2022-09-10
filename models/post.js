/**************************************************
 *             author : siddharth                  *
 **************************************************/

const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
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
  content: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  date: {
    type: Date,
    default: Date.now(),
  }
});

module.exports = mongoose.model("Post", postSchema);
