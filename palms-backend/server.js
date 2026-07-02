require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const inquiryRoutes = require("./routes/inquiryRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/inquiries", inquiryRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("✅ PALMS Backend Server is Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});