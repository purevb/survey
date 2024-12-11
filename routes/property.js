const express = require("express");
const {
    createProperty,
    getAllProperties,
    getPropertyById,
    updateProperty,
    deleteProperty,
} = require("../controller/property.js");

const router = express.Router();

router.post("/properties", createProperty);
router.get("/properties", getAllProperties);
router.get("/properties/:id", getPropertyById);
router.put("/properties/:id", updateProperty);
router.delete("/properties/:id", deleteProperty);

module.exports = router;
