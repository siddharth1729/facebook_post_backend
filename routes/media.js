/**************************************************
 *             author : siddharth                  *
 ****************************************************/
const express = require("express");
const router = express.Router();
const Media = require("../models/media");
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const multer = require("multer");

const Joi = require("@hapi/joi");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

var upload = multer({ storage: storage });

//###################################################################
//#####################  Media for post    #############################

router.post("/", upload.single("image"), async (req, res) => {
  console.log("================");
  console.log(req.image);
  const response = { success: false, result: {}, message: "" };

  //ON PROCESS OF ADDING NEW USER

  var media = new Media({
    id: "idrandom",
    post_id: "idrandom",
    media: req.image,
  });

  try {
    if (media) {
      //########  ADDING NEW MEDIA TO DATABASE
      const savepost = await media.save();
      console.log("==savepost==", savepost);
      response.success = true;
      response.result = media;
    }
  } catch (error) {
    response.success = false;
    response.result = error.message;
    console.log(error);
  }
  res.json(response);
});

module.exports = router;
