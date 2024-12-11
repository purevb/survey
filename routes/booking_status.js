const express = require("express");
const {
    createBookingStatus,
    getAllBookingStatuses,
    getBookingStatusById,
    updateBookingStatus,
    deleteBookingStatus,
} = require("../controller/booking_status.js");

const router = express.Router();

router.post("/bookingstatuses", createBookingStatus);
router.get("/bookingstatuses", getAllBookingStatuses);
router.get("/bookingstatuses/:id", getBookingStatusById);
router.put("/bookingstatuses/:id", updateBookingStatus);
router.delete("/bookingstatuses/:id", deleteBookingStatus);

module.exports = router;
