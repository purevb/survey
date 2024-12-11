const express = require("express");
const {
    createBooking,
    getUserBookings,
    getBookingById,
    updateBooking,
    deleteBooking,
} = require("../controller/booking.js");


const router = express.Router();

router.post("/bookings", createBooking);
router.get("/bookings/:userId", getUserBookings);
router.get("/bookings/:id", getBookingById);
router.put("/bookings/:id", updateBooking);
router.delete("/bookings/:id", deleteBooking);

module.exports = router;
