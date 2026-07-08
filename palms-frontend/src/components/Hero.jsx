import "./Hero.css";
import heroImage from "../assets/images/hero.jpg";
import logo from "../assets/logo/logo.png";

function Hero() {
  return (
    <section
id="home"
className="hero"
style={{
backgroundImage:`linear-gradient(rgba(22,95,40,.65),rgba(22,95,40,.65)), url(${heroImage})`
}}
    >

      {/* Large Logo */}
      <div className="logo">
              <img src={logo} alt="PALMS Nursery" />
            </div>
      
   
      <div className="overlay">
        <div className="hero-content">
          <h1>PALMS Nursery & Landscapers</h1>

          <p>Transform Your Outdoor Space Into a Green Paradise</p>

          <h3>
            Landscape Designing • Garden Development • Lawn Installation •
            Irrigation Systems • Wholesale Nursery Plants
          </h3>

          <div className="hero-buttons">
            <a href="#contact" className="btn-green">
              Contact Us
            </a>

            <a href="#gallery" className="btn-brown">
              View Gallery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;