const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_id: { type: Number },
  user_name: { type: String },
  back_accounts: [String],
  id: { type: Number },
  name: { type: String },
  accounts: {
    bank: { type: String },
    branch: { type: String },
    address: { type: String },
    city: { type: String },
    district: { type: String },
    state: { type: String },
    bank_code: { type: String },
    weather: {
      temp: { type: Number },
      humidity: { type: Number },
    },
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
