const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema(
  {
    title: String,
    heading: String,
    image: String,
    status: {
      type: String,
      default: "active",
      enum: ["active", "expired"],
    },
    url: String,
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
