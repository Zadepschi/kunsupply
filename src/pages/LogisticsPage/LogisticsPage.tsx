import "./LogisticsPage.css";
import logisticImg from "../../assets/logistic.png"; // путь подстройте под свой проект

export const LogisticsPage = () => {
  return (
    <main className="logistics">
      <section className="logistics__hero">
        <div className="container">
          <div className="logistics__hero-content">
            <div className="logistics__hero-text">
              <h1 className="logistics__title">
                Logistics & Delivery
              </h1>

              <p className="logistics__subtitle">
                Reliable nationwide distribution of bottled water
                and bulk food products for retailers,
                distributors, and businesses.
              </p>
            </div>

            <div className="logistics__hero-image">
              <img
                src={logisticImg}
                alt="Logistics"
              />
            </div>
          </div>
        </div>
      </section>


      <section className="logistics__section">
        <div className="container">
          <h2>Shipping Options</h2>

          <div className="logistics__grid">
            <div className="logistics__card">
              <h3>🚚 Full Truckload (FTL)</h3>

              <p>
                Ideal for large wholesale orders and
                pallet quantities.
              </p>

              <ul>
                <li>Direct delivery</li>
                <li>Faster transit times</li>
                <li>Competitive freight rates</li>
              </ul>
            </div>

            <div className="logistics__card">
              <h3>📦 Less Than Truckload (LTL)</h3>

              <p>
                Cost-effective shipping for smaller
                wholesale orders.
              </p>

              <ul>
                <li>Flexible order volumes</li>
                <li>Nationwide coverage</li>
                <li>Lower transportation costs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="logistics__section logistics__light">
        <div className="container">
          <h2>Pallet Distribution</h2>

          <p>
            Products are securely palletized to ensure
            safe transportation, efficient warehouse
            handling, and reduced shipping damage.
          </p>

          <div className="logistics__features">
            <div>✓ Secure Packaging</div>
            <div>✓ Inventory Ready</div>
            <div>✓ Reduced Damage Risk</div>
            <div>✓ Efficient Handling</div>
          </div>
        </div>
      </section>

      <section className="logistics__section">
        <div className="container">
          <h2>Industries We Serve</h2>

          <div className="logistics__industries">
            <div>🏪 Grocery Stores</div>
            <div>⛽ Gas Stations</div>
            <div>🛒 Retail Chains</div>
            <div>🍽 Restaurants</div>
            <div>🏢 Offices</div>
            <div>📦 Distributors</div>
          </div>
        </div>
      </section>

      <section className="logistics__cta">
        <div className="container">
          <h2>Need a Shipping Quote?</h2>

          <p>
            Contact our team for product availability,
            freight estimates, and volume pricing.
          </p>

          <button className="logistics__button">
            Request Wholesale Pricing
          </button>
        </div>
      </section>
    </main>
  );
};