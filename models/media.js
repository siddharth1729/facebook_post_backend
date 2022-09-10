/**************************************************
 *             author : siddharth                  *
 **************************************************/

const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema({
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
  },
});

module.exports = mongoose.model("Media", mediaSchema);
