const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema(
  {
    noticeId: {
      type: String,
      required: true,
      unique: true
    },
    title: {
      type: String,
      required: true,
      trim: true
    },
    content: {
      type: String,
      required: true,
      trim: true
    },
    postedBy: {
      type: String,
      required: true
    },
    postedByName: {
      type: String,
      default: ""
    },
    targetRole: {
      type: String,
      enum: ["all", "student", "faculty"],
      default: "all"
    },
    targetDivision: {
      type: String,
      default: "all"
    },
    targetSemester: {
      type: String,
      default: "all"
    },
    isImportant: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Notice", noticeSchema);
