import "./About.css";
import aboutImage from "../assets/images/about.jpg";

import { FaLeaf, FaSeedling, FaTint, FaUsers, FaMedal, FaTree, FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-image">
        <img src={aboutImage} alt="PALMS Nursery" />
      </div>

      <div className="about-content">

        <h4>ABOUT US</h4>

        <h2>PALMS Nursery & Landscapers</h2>

        <p>
          PALMS Nursery & Landscapers is a trusted landscaping and garden
          development company based in Malegaon, Nashik. We specialize in
          creating beautiful outdoor spaces with high-quality plants,
          professional landscape design, lawn installation, irrigation systems,
          and garden maintenance.
        </p>

        <div className="about-list">

          <div>
            <FaLeaf className="icon" />
            Landscape Designing
          </div>

          <div>
            <FaSeedling className="icon" />
            Garden Development
          </div>

          <div>
            <FaTint className="icon" />
            Irrigation Systems
          </div>

          <div>
            <FaTree className="icon" />
            Lawn Installation
          </div>

          <div>
            <FaCheckCircle className="icon" />
            Wholesale Nursery Plants
          </div>

        </div>

      </div> 
</section>
);
}

export default About;
  