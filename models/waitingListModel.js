const mongoose = require("mongoose");
const waitingSchema = new mongoose.Schema(
  {
    link: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const WaitingList = mongoose.model("WaitingList", waitingSchema);

module.exports = WaitingList;
