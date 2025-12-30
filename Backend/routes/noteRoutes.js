const express = require("express");
const mongoose = require("mongoose");
const Note = require("../models/Notes");

const router = express.Router();
module.exports = router;

router.get("/", async (req, res) => {
  const filter = {};

  if (req.query.subject) {
    filter.subject = new RegExp(`^${req.query.subject}$`, "i");
  }

  const notes = await Note.find(filter).sort({ createdAt: -1 });
  res.json(notes);
});

/**
 * POST create note
 */
router.post("/", async (req, res) => {
  try {
    const note = await Note.create(req.body);
    res.status(201).json(note);
  } catch (error) {
    res.status(400).json({ message: error.message });
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
