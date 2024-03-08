const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const historySchema = new Schema({
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
  longerDescription: {
    type: String,
  },
  order: {
    type: Number,
    require: true
  },
});

module.exports = mongoose.model("History", historySchema);
