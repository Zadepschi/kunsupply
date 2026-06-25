import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__company">
          <h3>Kan Supply, Inc.</h3>

          <p>
            Trusted wholesale distributor of bottled water
            and water softening products serving businesses
            throughout New York.
          </p>
        </div>

        <div className="footer__links">
          <h4>Quick Links</h4>

          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About Us</Link>
          <Link to="/logistics">Logistics</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer__legal">
          <h4>Legal</h4>

          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/cookie-policy">Cookie Policy</Link>
        </div>

        <div className="footer__contact">
          <h4>Contact</h4>

          <p>Email: kansupplyny@gmail.com</p>
          <p>Phone: (646) 298-4288</p>
          <p>New York, USA</p>
        </div>

      </div>

      <div className="footer__bottom">
        <p>
          © {new Date().getFullYear()} Kan Supply, Inc. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};