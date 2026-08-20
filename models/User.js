const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    role: {
      type: String,
      required: true,
      enum: ["student", "faculty", "admin"],
      index: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      default: ""
    },
    passwordHash: {
      type: String,
      default: ""
    },
    subject: {
      type: String,
      default: "",
      trim: true
    },
    department: {
      type: String,
      default: "",
      trim: true
    },
    division: {
      type: String,
      default: "",
      trim: true
    },
    semester: {
      type: String,
      default: "",
      trim: true
    },
    courseYear: {
      type: String,
      default: "",
      trim: true
    },
    course: {
      type: String,
      default: "",
      trim: true
    },
    languageChoice: {
      type: String,
      default: "",
      trim: true
    },
    mathChoice: {
      type: String,
      default: "",
      trim: true
    },
    profilePic: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true
  }
);

// Method to remove sensitive fields
userSchema.methods.toPublicJSON = function () {
  const obj = this.toObject();
  delete obj.passwordHash;
  delete obj.__v;
  delete obj._id;
  return obj;
};

module.exports = mongoose.model("User", userSchema);
