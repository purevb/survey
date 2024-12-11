const mongoose = require("mongoose");
const booking_status = new mongoose.Schema({
  status_name: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model("bookingstatus", booking_status);
