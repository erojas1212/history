const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userHistory = new Schema({
  event: {
    type: String,
    require: true
  },
  description: {
    type: String,
  },
  date: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

module.exports = mongoose.model("UserH", userHistory);
