import "./AboutPage.css";
import { Link } from "react-router-dom";
import CrystalGeyser from "../../assets/CrystalGeyser.jpg";
import DiamondCrystal from "../../assets/diamondcrystal.jpg";
import IceMountain from "../../assets/IceMountain.webp";
import Kirkland from "../../assets/kirkland.jpg";
import PolandSpring from "../../assets/PolandSpring.webp";
import PureLife from "../../assets/purelife.jpg";
import ShahCo from "../../assets/Logo_ShahCo.png";
import Morton from "../../assets/morton logo.png";

export const AboutPage = () => {
return ( <main className="about"> 
<section className="about-hero"> 
  <div className="about-hero__overlay"> 
    <div className="container"> 
      <h1>About Kan Supply</h1>


       <p>
  For over 5 years, Kan Supply, Inc. has been providing
  reliable wholesale distribution of bottled water and
  water softening products throughout New York.
</p>
      </div>
    </div>
  </section>

  <section className="about-story">
    <div className="container">
      <h2>Our Story</h2>

      <p>
        Kan Supply was founded with a simple
        mission: to provide dependable product supply,
        competitive pricing, and reliable logistics
        for businesses across New York.
      </p>

      <p>
        Over the years, we have built strong
        relationships with trusted manufacturers and
        distribution partners, helping retailers and
        distributors receive products efficiently and
        consistently.
      </p>
    </div>
  </section>

  <section className="about-features">
    <div className="container">
      <h2>Why Businesses Choose Us</h2>

      <div className="features-grid">
        <div className="feature-card">
          <h3>5+ Years Experience</h3>
          <p>
            Serving New York businesses with reliable
            wholesale solutions.
          </p>
        </div>

        <div className="feature-card">
          <h3>Trusted Network</h3>
          <p>
            Strong relationships with manufacturers
            and logistics partners.
          </p>
        </div>

        <div className="feature-card">
          <h3>Competitive Pricing</h3>
          <p>
            Volume-based pricing for retailers and
            distributors.
          </p>
        </div>

        <div className="feature-card">
          <h3>Reliable Deliveries</h3>
          <p>
            Fast and dependable deliveries throughout
            New York.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section className="about-stats">
    <div className="container stats-grid">
      <div>
        <h3>5+</h3>
        <p>Years in Business</p>
      </div>

      <div>
        <h3>100+</h3>
        <p>Business Customers</p>
      </div>

      <div>
        <h3>7+</h3>
        <p>Strategic Partners</p>
      </div>

      <div>
        <h3>1000+</h3>
        <p>Orders Delivered</p>
      </div>
    </div>
  </section>

  <section className="about-partners">
    <div className="container">
      <h2>Trusted Brands & Partners</h2>

      <p>
        We proudly work with leading manufacturers,
        distributors, and suppliers.
      </p>

      <div className="partners-grid">
          <div className="partner-logo">
    <img
      src={ShahCo}
      alt="Shah Co"
    />
  </div>
  <div className="partner-logo">
    <img
      src={CrystalGeyser}
      alt="Crystal Geyser"
    />
  </div>

  <div className="partner-logo">
    <img
      src={DiamondCrystal}
      alt="Diamond Crystal"
    />
  </div>

  <div className="partner-logo">
    <img
      src={IceMountain}
      alt="Ice Mountain"
    />
  </div>

  <div className="partner-logo">
    <img
      src={Kirkland}
      alt="Kirkland"
    />
  </div>

  <div className="partner-logo">
    <img
      src={PolandSpring}
      alt="Poland Spring"
    />
  </div>

  <div className="partner-logo">
    <img
      src={PureLife}
      alt="Pure Life"
    />
  </div>
    <div className="partner-logo">
    <img
      src={Morton}
      alt="Morton"
    />
  </div>


</div>
    </div>
  </section>

  <section className="about-cta">
    <div className="container">
      <h2>Looking for Wholesale Pricing?</h2>

      <p>
        Contact our team today to discuss product
        availability, volume pricing, and delivery
        options.
      </p>

      <Link
        to="/contact"
        className="about-button"
      >
        Request Wholesale Pricing
      </Link>
    </div>
  </section>
</main>

);
};
