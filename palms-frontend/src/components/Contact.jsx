import "./Contact.css";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
  "https://palms-backend-wk2r.onrender.com/api/inquiries",
  formData
);

    alert(response.data.message);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

  } catch (error) {
    alert("Something went wrong.");
    console.error(error);
  }
};
  return (
    <section className="contact" id="contact">

      <div className="contact-title">
        <h5>CONTACT US</h5>
        <h2>Get In Touch</h2>
        <p>
          We'd love to hear from you. Contact us for landscaping, garden
          development, nursery plants, and maintenance services.
        </p>
      </div>

      <div className="contact-container">

        {/* Left Side */}

        <div className="contact-info">

          <div className="info-box">
            <FaPhoneAlt className="info-icon"/>
            <div>
              <h3>Call Us</h3>
              <a href="tel:+919665093085">+91 9665093085</a>
            </div>
          </div>

          <div className="info-box">
            <FaWhatsapp className="info-icon"/>
            <div>
              <h3>WhatsApp</h3>
              <a
                href="https://wa.me/919665093085"
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="info-box">
            <FaEnvelope className="info-icon"/>
            <div>
              <h3>Email</h3>
              <a href="mailto:jaaeehiray7@gmail.com">
                jaaeehiray7@gmail.com
              </a>
            </div>
          </div>

          <div className="info-box">
            <FaMapMarkerAlt className="info-icon"/>
            <div>
              <h3>Address</h3>
              <p>
                Dhavleshwor,
                Malegaon,
                Nashik,
                Maharashtra - 423201
              </p>
            </div>
          </div>

          <div className="info-box">
            <FaClock className="info-icon"/>
            <div>
              <h3>Working Hours</h3>
              <p>Monday - Sunday</p>
              <p>8:00 AM - 7:00 PM</p>
            </div>
          </div>

        </div>

        {/* Right Side */}

        <div className="contact-form">

          <form onSubmit={handleSubmit}>

            <input
  type="text"
  name="name"
  placeholder="Your Name"
  value={formData.name}
  onChange={handleChange}
  required
/>

            <input
  type="email"
  name="email"
  placeholder="Your Email"
  value={formData.email}
  onChange={handleChange}
  required
/>

           <input
  type="tel"
  name="phone"
  placeholder="Phone Number"
  value={formData.phone}
  onChange={handleChange}
  required
/>

<textarea
  rows="6"
  name="message"
  placeholder="Write Your Message"
  value={formData.message}
  onChange={handleChange}
  required
></textarea>

            <button type="submit">
              Send Inquiry
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;