import "./HomePage.css";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero__content">
        <span className="hero__company">
          KAN SUPPLY
        </span>

        <h1 className="hero__title">
          Wholesale Bottled Water
        </h1>

        <p className="hero__text">
  Reliable wholesale distribution of bottled water and water softening products throughout New York.
</p>

        <button className="hero__button"
          onClick={() => {
    navigate("/contact");
    window.scrollTo(0, 0);
  }}
        >
          Get Wholesale Pricing
        </button>
      </div>
    </section>
  );
};