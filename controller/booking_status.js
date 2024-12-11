const BookingStatus = require("../models/booking_status");

const createBookingStatus = async (req, res) => {
  try {
    const newBookingStatus = new BookingStatus(req.body);
    const savedBookingStatus = await newBookingStatus.save();
    res.status(201).json({ msg: "Booking status created successfully!", bookingStatus: savedBookingStatus });
  } catch (error) {
    console.error("Error creating booking status:", error);
    res.status(500).json({ msg: "Failed to create booking status.", error: error.message });
  }
};

const getAllBookingStatuses = async (req, res) => {
  try {
    const bookingStatuses = await BookingStatus.find();
    res.status(200).json({ bookingStatuses });
  } catch (error) {
    console.error("Error fetching booking statuses:", error);
    res.status(500).json({ msg: "Failed to fetch booking statuses.", error: error.message });
  }
};

const getBookingStatusById = async (req, res) => {
  try {
    const id = req.params.id;
    const bookingStatus = await BookingStatus.findById(id);

    if (!bookingStatus) {
      return res.status(404).json({ msg: "Booking status not found." });
    }

    res.status(200).json({ bookingStatus });
  } catch (error) {
    console.error("Error fetching booking status by ID:", error);
    res.status(500).json({ msg: "Failed to fetch booking status.", error: error.message });
  }
};

const updateBookingStatus = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedBookingStatusData = req.body;

    const updatedBookingStatus = await BookingStatus.findByIdAndUpdate(
      id,
      updatedBookingStatusData,
      { new: true, runValidators: true }
    );

    if (!updatedBookingStatus) {
      return res.status(404).json({ msg: "Booking status not found." });
    }

    res.status(200).json({ msg: "Booking status updated successfully!", bookingStatus: updatedBookingStatus });
  } catch (error) {
    console.error("Error updating booking status:", error);
    res.status(500).json({ msg: "Failed to update booking status.", error: error.message });
  }
};

const deleteBookingStatus = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedBookingStatus = await BookingStatus.findByIdAndDelete(id);

    if (!deletedBookingStatus) {
      return res.status(404).json({ msg: "Booking status not found." });
    }

    res.status(200).json({ msg: "Booking status deleted successfully!", bookingStatus: deletedBookingStatus });
  } catch (error) {
    console.error("Error deleting booking status:", error);
    res.status(500).json({ msg: "Failed to delete booking status.", error: error.message });
  }
};

module.exports = {
  createBookingStatus,
  getAllBookingStatuses,
  getBookingStatusById,
  updateBookingStatus,
  deleteBookingStatus,
};
