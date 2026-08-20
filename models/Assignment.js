const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
  {
    studentUsername: { type: String, required: true },
    studentName: { type: String, default: "" },
    submittedAt: { type: Date, default: Date.now },
    fileUrl: { type: String, default: "" },
    notes: { type: String, default: "" },
    grade: { type: String, default: "" }
  },
  { _id: false }
);

const assignmentSchema = new mongoose.Schema(
  {
    assignmentId: {
      type: String,
      required: true,
      unique: true
    },
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      default: ""
    },
    subject: {
      type: String,
      required: true
    },
    dueDate: {
      type: Date,
      required: true
    },
    facultyUsername: {
      type: String,
      required: true
    },
    submissions: [submissionSchema]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Assignment", assignmentSchema);
