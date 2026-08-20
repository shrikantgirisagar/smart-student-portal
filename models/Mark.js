const mongoose = require("mongoose");

const markSchema = new mongoose.Schema(
  {
    markId: {
      type: String,
      required: true,
      unique: true
    },
    studentUsername: {
      type: String,
      required: true,
      index: true
    },
    studentName: {
      type: String,
      default: ""
    },
    subject: {
      type: String,
      required: true
    },
    examName: {
      type: String,
      required: true // e.g. "Internal 1", "Internal 2", "Final"
    },
    marksObtained: {
      type: Number,
      required: true
    },
    maxMarks: {
      type: Number,
      required: true,
      default: 100
    },
    facultyUsername: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Mark", markSchema);
