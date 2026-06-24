import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__company">
            <h3>Kan Supply, Inc.</h3>

          <p>
            Wholesale bottled water and bulk food
            distribution throughout New York.
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

        <div className="footer__contact">
          <h4>Contact</h4>

          <p>kansupplyny@gmail.com</p>
          <p>(646) 298-4288</p>
          <p>New York, USA</p>
        </div>
      </div>

    <div className="footer__bottom">
  © {new Date().getFullYear()} Kan Supply, Inc.
  All Rights Reserved.
</div>
    </footer>
  );
};