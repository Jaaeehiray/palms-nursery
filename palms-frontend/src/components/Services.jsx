import "./Services.css";
import {
  FaTree,
  FaSeedling,
  FaLeaf,
  FaTint,
  FaTools,
  FaPagelines,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaTree />,
      title: "Landscape Designing",
      description:
        "Professional landscape planning and design for homes, villas, resorts and commercial spaces.",
    },
    {
      icon: <FaSeedling />,
      title: "Garden Development",
      description:
        "Beautiful gardens with seasonal flowers, shrubs, trees and decorative plants.",
    },
    {
      icon: <FaLeaf />,
      title: "Lawn Installation",
      description:
        "Natural and lush green lawns with proper soil preparation and maintenance.",
    },
    {
      icon: <FaTint />,
      title: "Irrigation Systems",
      description:
        "Efficient drip and sprinkler irrigation solutions for gardens and landscapes.",
    },
    {
      icon: <FaPagelines />,
      title: "Nursery Plants",
      description:
        "Healthy indoor plants, outdoor plants, palm trees and ornamental plants.",
    },
    {
      icon: <FaTools />,
      title: "Garden Maintenance",
      description:
        "Regular maintenance, pruning, cleaning and complete garden care services.",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h4>OUR SERVICES</h4>
        <h2>What We Offer</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;