const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    semester: String,
    subject: String, // chemistry | physics | maths
    pdfUrl: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Note", noteSchema);
