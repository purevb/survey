const express = require("express");
const router = express.Router();
const {postQoptoin,getQoption,search,updateQoption,deleteQoption}= require("../controller/question_option");
router.post("/qoption",postQoptoin);
router.get("/qoption",getQoption);
router.get("/qoption/:id",search);
router.put("/qoption/:id",updateQoption);
router.delete("/qoption/:id",deleteQoption);

module.exports=router;
