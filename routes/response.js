const express = require("express");
const router = express.Router();
const {getResponse,postResponse,search,deleteResponse} =require("../controller/response");


router.post("/response",postResponse);
router.get("/response",getResponse);
router.get("/response/:id",search);
router.delete("/response/:id",deleteResponse);

module.exports=router;