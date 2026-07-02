import "./WhyChoose.css";
import whyImage from "../assets/images/whychoose.jpg";

import {
  FaLeaf,
  FaTree,
  FaUsers,
  FaMedal,
} from "react-icons/fa";

function WhyChoose() {
  return (
    <section className="why-section" id="why">

      <div className="why-left">

        <h5>WHY CHOOSE US</h5>

        <h2>Why Choose PALMS Nursery & Landscapers?</h2>

        <p className="why-text">
          We are committed to creating beautiful green spaces with quality
          plants, professional landscaping, and excellent customer service.
          Every project is completed with attention to detail and customer
          satisfaction.
        </p>

        <div className="why-grid">

          <div className="why-card">
            <div className="why-icon">
              <FaLeaf />
            </div>

            <div>
              <h3>Quality Plants</h3>
              <p>Healthy and premium nursery plants for every project.</p>
            </div>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <FaTree />
            </div>

            <div>
              <h3>Landscape Design</h3>
              <p>Creative landscape solutions for homes and businesses.</p>
            </div>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <FaUsers />
            </div>

            <div>
              <h3>Experienced Team</h3>
              <p>Professional experts with years of landscaping experience.</p>
            </div>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <FaMedal />
            </div>

            <div>
              <h3>Customer Satisfaction</h3>
              <p>Reliable service with complete customer satisfaction.</p>
            </div>
          </div>

        </div>

      </div>

      <div className="why-right">

        <img src={whyImage} alt="Why Choose PALMS Nursery" />

      </div>

    </section>
  );
}

export default WhyChoose;