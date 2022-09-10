/**************************************************
 *             author : siddharth                  *
 ****************************************************/
const express = require("express");
const router = express.Router();
const Post = require("../models/post");
const app = express();
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const Joi = require("@hapi/joi");

//VALIDATION OF POST INPUTS PREREQUISITES
const registerSchema = Joi.object({
  content: Joi.string().min(3).required(),
});

//###################################################################
//#####################  CREATING POST    #############################

router.post("/", async (req, res) => {
  console.log("================");
  console.log(req.body);
  const response = { success: false, result: {}, message: "" };

  //GENERATING RANDOM TOKEN
  generate = (payload) => {
    const id = String(payload) + Math.random().toString(36).slice(2);
    return id;
  };

  const id = generate("abc");
  console.log(id);

  //ON PROCESS OF ADDING NEW USER

  var post = new Post({
    user_id: id,
    post_id: id,
    content: req.body.content,
  });

  try {
    //VALIDATION OF USER INPUTS

    const { error } = await registerSchema.validateAsync(req.body);
    //WE CAN JUST GET THE ERROR(IF EXISTS) WITH OBJECT DECONSTRUCTION

    //   IF ERROR EXISTS THEN SEND BACK THE ERROR
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    } else {
      //########  ADDING NEW USER TO DATABASE
      const savepost = await post.save();
      console.log("==savepost==", savepost);
    }
    if (post) {
      response.success = true;
      response.result = post;
    }
  } catch (error) {
    response.success = false;
    response.result = error.message;
  }
  res.json(response);
});

module.exports = router;
