/**************************************************
 *             author : siddharth                  *
 **************************************************/

const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
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
  comment: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  content_id: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
});

module.exports = mongoose.model("Comment", commentSchema);
