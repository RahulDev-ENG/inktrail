const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    subject: {
      type: String,
      required: true,
      lowercase: true, // physics / chemistry / maths
      trim: true,
    },

    semester: {
      type: String,
      required: true,
      enum: ["1", "2", "3", "4", "5", "6"],
    },

    pdfUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Note", noteSchema);
