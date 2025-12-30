const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const noteRoutes = require("./routes/noteRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/notes", noteRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT || 10000, () => {
      console.log("Server running");
    });
  })
  .catch((err) => {
    console.error("MongoDB error:", err.message);
  });

app.get("/", (req, res) => {
  res.send("API running");
});
