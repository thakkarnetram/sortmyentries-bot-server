const mongoose = require("mongoose");

const OtpSchema = new mongoose.Schema({
  otp: {
    type: String,
  },
  isUsed: {
    type: Boolean,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const OTP = mongoose.model("otp", OtpSchema);
module.exports = OTP;