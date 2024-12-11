const mongoose = require('mongoose');


const booking = new mongoose.Schema({
  property_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'property',
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  booking_status_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'bookingstatus',
  },
  checkin_date: {
    type: Date,
    required: [true, 'checkin_date is required'],
  },
  checkout_date: {
    type: Date,
    required: [true, 'checkout_date is required'],
  },
  Rental_Rate: {
    type: Number,
    required: [true, 'Rental_Rate is required'],
  },
  nightly_price: {
    type: Number,
    required: [true, 'nightly_price is required'],
  },
  service_fee: {
    type: Number,
    required: [true, 'service_fee is required'],
  },
  cleaning_fee: {
    type: Number,
    required: [true, 'is_Mandatory is required'],
  },
  total_price: {
    type: Number,
    required: [true, 'total_price is required'],
  },
  num_guests: {
    type: Number,
    required: [true, 'num_guests is required'],
  },
});

module.exports = mongoose.model('booking', booking);
