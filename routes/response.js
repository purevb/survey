const express = require("express");
const router = express.Router();
const {
  getResponse,
  update,
  postResponse,
  search,
  deleteResponse,
} = require("../controller/response");

router.post("/response", postResponse);
router.put("/updateResponse/:id", update);
router.get("/response", getResponse);
router.get("/response/:id", search);
router.delete("/response/:id", deleteResponse);

module.exports = router;
