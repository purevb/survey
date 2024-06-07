const express = require("express");
const router = express.Router();
const {getUser,search,postUser}= require("../controller/users.js");
router.get("/user",getUser);
router.get("/user/:id",search);
router.post("/user",postUser);
module.exports=router;
