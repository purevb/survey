const express = require("express");
const UserService = require("../services/user_services");
const router = express.Router();
const {updateUser,loginUser,getUser,search,postUser}= require("../controller/users.js");
router.get("/user",getUser);
router.get("/user/:id",search);
router.post("/user",postUser);
// login user
router.post('/login',loginUser);
router.put('/user/:id',updateUser);
// signup user
// router.post('registration',register);
module.exports=router;

