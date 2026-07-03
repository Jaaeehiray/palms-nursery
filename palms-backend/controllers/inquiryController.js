const Inquiry = require("../models/Inquiry");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log("SMTP Error:", error);
  } else {
    console.log("SMTP Server is Ready");
  }
});

const createInquiry = async (req, res) => {
  try {
    console.log("Request received");

    const { name, email, phone, message } = req.body;

    console.log("Saving to MongoDB...");

    const inquiry = await Inquiry.create({
      name,
      email,
      phone,
      message,
    });

    console.log("Saved Successfully");

    console.log("Sending Email...");

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "🌿 New Inquiry - PALMS Nursery Website",
      html: `
        <h2>New Customer Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log("Email Sent");

    res.status(201).json({
      success: true,
      message: "Inquiry submitted successfully.",
      inquiry,
    });

  } catch (error) {
    console.error("FULL ERROR:");
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  createInquiry,
};