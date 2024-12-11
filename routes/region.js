const express = require("express");
const {
    getRegion,
    postRegion,
    searchRegion,
    updateRegion,
    deleteRegion,
} = require("../controller/region.js");
const router = express.Router();
router.get("/regions", getRegion);
router.post("/regions", postRegion);
router.get("/regions/:id", searchRegion);
router.put("/regions/:id", updateRegion);
router.delete("/regions/:id", deleteRegion);

module.exports = router;
