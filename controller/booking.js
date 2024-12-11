const Booking = require("../models/booking");

const createBooking = async (req, res) => {
    try {
        const {
            property_id,
            user_id,
            booking_status_id,
            checkin_date,
            checkout_date,
            Rental_Rate,
            nightly_price,
            service_fee,
            cleaning_fee,
            total_price,
            num_guests,
        } = req.body;

        const newBooking = new Booking({
            property_id,
            user_id,
            booking_status_id,
            checkin_date,
            checkout_date,
            Rental_Rate,
            nightly_price,
            service_fee,
            cleaning_fee,
            total_price,
            num_guests,
        });

        const savedBooking = await newBooking.save();
        res.status(201).json({ msg: "Booking created successfully", booking: savedBooking });
    } catch (error) {
        console.error("Error creating booking:", error);
        res.status(500).json({ msg: "Failed to create booking.", error: error.message });
    }
};

const getUserBookings = async (req, res) => {
    try {
        const userId = req.params.userId;

        const bookings = await Booking.find({ user_id: userId }).populate('property_id').populate('booking_status_id');

        if (!bookings.length) {
            return res.status(404).json({ msg: "No bookings found for this user." });
        }

        res.status(200).json({ bookings });
    } catch (error) {
        console.error("Error fetching bookings:", error);
        res.status(500).json({ msg: "Failed to fetch bookings.", error: error.message });
    }
};

const getBookingById = async (req, res) => {
    try {
        const bookingId = req.params.id;

        const booking = await Booking.findById(bookingId)
            .populate('property_id')
            .populate('booking_status_id');

        if (!booking) {
            return res.status(404).json({ msg: "Booking not found." });
        }

        res.status(200).json({ booking });
    } catch (error) {
        console.error("Error fetching booking:", error);
        res.status(500).json({ msg: "Failed to fetch booking.", error: error.message });
    }
};

const updateBooking = async (req, res) => {
    try {
        const bookingId = req.params.id;
        const updatedBookingData = req.body;

        const updatedBooking = await Booking.findByIdAndUpdate(bookingId, updatedBookingData, { new: true });

        if (!updatedBooking) {
            return res.status(404).json({ msg: "Booking not found." });
        }

        res.status(200).json({ msg: "Booking updated successfully", booking: updatedBooking });
    } catch (error) {
        console.error("Error updating booking:", error);
        res.status(500).json({ msg: "Failed to update booking.", error: error.message });
    }
};

const deleteBooking = async (req, res) => {
    try {
        const bookingId = req.params.id;

        const deletedBooking = await Booking.findByIdAndDelete(bookingId);

        if (!deletedBooking) {
            return res.status(404).json({ msg: "Booking not found." });
        }

        res.status(200).json({ msg: "Booking deleted successfully", booking: deletedBooking });
    } catch (error) {
        console.error("Error deleting booking:", error);
        res.status(500).json({ msg: "Failed to delete booking.", error: error.message });
    }
};

module.exports = {
    createBooking,
    getUserBookings,
    getBookingById,
    updateBooking,
    deleteBooking,
};
