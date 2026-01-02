const express = require("express");
const mongoose = require("mongoose");
const Note = require("../models/Notes");

const router = express.Router();
module.exports = router;

router.get("/notes", async (req, res) => {
  try {
    const subject = req.query.subject?.toLowerCase().trim();
    const semester = req.query.semester?.trim();

    if (!subject || !semester) return res.json([]);

    const notes = await Note.find({ subject, semester });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

/**
 * POST create note
 */
router.post("/notes", async (req, res) => {
  try {
    const { title, description, subject, semester, pdfUrl } = req.body;

    const note = new Note({
      title,
      description,
      subject: subject.toLowerCase().trim(),
      semester: semester.replace("Semester", "").trim(),
      pdfUrl,
    });

    await note.save();
    res.json(note);
  } catch (err) {
    res.status(500).json({ error: "Failed to save note" });
  }
});

/**
 * PUT update note
 */
router.put("/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  const updated = await Note.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  res.json(updated);
});

/**
 * DELETE note
 */
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  await Note.findByIdAndDelete(id);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;
