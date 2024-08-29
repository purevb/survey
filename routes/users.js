const express = require("express");
const UserService = require("../services/user_services");
const router = express.Router();
const {addSurveyId,loginUser,getUser,search,postUser}= require("../controller/users.js");
router.get("/user",getUser);
router.get("/user/:id",search);
router.post("/user",postUser);
router.post("/user/:id", addSurveyId);
// login user
router.post('/login',loginUser);
// signup user
// router.post('registration',register);
module.exports=router;

