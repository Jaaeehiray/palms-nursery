import "./Footer.css";
import logo from "../assets/logo/logo.png";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}

        <div className="footer-box">

          <img src={logo} alt="PALMS Logo" className="footer-logo" />

          <p>
            PALMS Nursery & Landscapers provides premium plants,
            professional landscaping, garden development, lawn
            installation and irrigation services across Nashik
            and surrounding areas.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-box">

          <h3>Quick Links</h3>

          <ul>

            <li><a href="#home">Home</a></li>

            <li><a href="#about">About</a></li>

            <li><a href="#services">Services</a></li>

            <li><a href="#gallery">Gallery</a></li>

            <li><a href="#contact">Contact</a></li>

          </ul>

        </div>

        {/* Contact */}

        <div className="footer-box">

          <h3>Contact</h3>

          <p><FaPhoneAlt /> +91 9665093085</p>

          <p><FaEnvelope /> palmsnursery15@gmail.com</p>

          <p><FaMapMarkerAlt /> Malegaon-Satana road, Chinchawad, fata, Aghar Bk, Malegaon, Maharashtra 423201</p>

        </div>

        {/* Follow Us */}

        <div className="footer-box">

          <h3>Follow Us</h3>

          <div className="social-icons">

            <a
              href="https://wa.me/919665093085"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.instagram.com/palms_nursery_and_landscapers?igsh=MTFqb3A0b2VhOGdjeA=="
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} #Hry & PALMS Nursery & Landscapers.
          All Rights Reserved.
        </p>

      </div>

      <button className="scroll-top" onClick={scrollTop}>
        <FaArrowUp />
      </button>

    </footer>
  );
}

export default Footer;