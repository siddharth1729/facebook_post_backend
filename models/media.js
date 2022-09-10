/**************************************************
 *             author : siddharth                  *
 **************************************************/

const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  id: {
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
  media: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
});

module.exports = mongoose.model("Post", postSchema);
