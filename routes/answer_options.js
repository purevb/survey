const express = require("express");
const router = express.Router();
const {postAoptions,getAoptions,search,updateAoptoins,deleteAoptions}= require("../controller/answer_options");

router.get("/aoptions",getAoptions);
router.post("/aoptions",postAoptions);
router.get("/aoptions/:id",search);
router.put("/aoptions/:id",updateAoptoins);
router.delete("/aoptions/:id",deleteAoptions);

module.exports=router;