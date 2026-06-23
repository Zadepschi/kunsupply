import "./Footer.css";

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

          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About Us</a>
          <a href="/logistics">Logistics</a>
          <a href="/contact">Contact</a>
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