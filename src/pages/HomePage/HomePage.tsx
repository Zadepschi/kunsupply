import "./HomePage.css";

export const HomePage = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <span className="hero__company">
          KUN SUPPLY
        </span>

        <h1 className="hero__title">
          Wholesale Bottled Water
        </h1>

        <p className="hero__text">
          Reliable supply of bottled water and bulk food
          products for retailers, distributors, and businesses
          across the United States.
        </p>

        <button className="hero__button">
          Get Wholesale Pricing
        </button>
      </div>
    </section>
  );
};