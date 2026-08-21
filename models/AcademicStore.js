const mongoose = require("mongoose");

const academicStoreSchema = new mongoose.Schema(
  {
    storeKey: {
      type: String,
      default: "default_academic_store",
      unique: true
    },
    students: {
      type: mongoose.Schema.Types.Mixed,
      default: {}
    },
    notices: {
      type: Array,
      default: []
    },
    timetable: {
      type: Array,
      default: []
    },
    timetableHeader: {
      type: mongoose.Schema.Types.Mixed,
      default: {}
    },
    customBreakRows: {
      type: mongoose.Schema.Types.Mixed,
      default: {}
    },
    assignments: {
      type: Array,
      default: []
    },
    notes: {
      type: Array,
      default: []
    },
    deletedAssignments: {
      type: Array,
      default: []
    },
    dailyAttendance: {
      type: Array,
      default: []
    },
    subjectMarksConfig: {
      type: mongoose.Schema.Types.Mixed,
      default: {}
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("AcademicStore", academicStoreSchema);
