const Inquiry = require("../models/Inquiry");

const createInquiry = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Save inquiry to MongoDB
    const inquiry = await Inquiry.create({
      name,
      email,
      phone,
      message,
    });

    console.log("✅ Inquiry saved to MongoDB");

    res.status(201).json({
      success: true,
      message: "Inquiry submitted successfully.",
      inquiry,
    });

  } catch (error) {
    console.error("❌ Database Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  createInquiry,
};