const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema(
  {
    attendanceId: {
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
    date: {
      type: Date,
      required: true
    },
    status: {
      type: String,
      enum: ["Present", "Absent"],
      required: true
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

module.exports = mongoose.model("Attendance", attendanceSchema);
