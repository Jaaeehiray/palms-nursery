import "./Map.css";

function Map() {
  return (
    <section className="map-section">

      <div className="map-title">
        <h4>OUR LOCATION</h4>
        <h2>Visit Our Nursery</h2>
      </div>

      <div className="map-container">
        <iframe
          title="PALMS Nursery Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.964459937347!2d74.3788555!3d20.548634999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bde85c0f2ff220f%3A0x6d0df7221beb9bd2!2sPalms%20Nursery%20%26%20Landscapers%20-%20Best%20Plants%20Nursery%20in%20Malegaon%20%26%20Nashik!5e0!3m2!1sen!2sin!4v1782914772800!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

    </section>
  );
}

export default Map;