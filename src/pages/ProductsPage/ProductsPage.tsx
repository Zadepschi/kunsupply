import "./ProductsPage.css";

import { products } from "../../shared/data/products";
import { ProductCard } from "../../entities/Product/ProductCard";
export const ProductsPage = () => {
  return (
    <main className="products">
      <section className="products-hero">
        <div className="container">
         <h1>Wholesale Products</h1>

<p>
  Wholesale bottled water and water softening products
  serving businesses throughout New York.
</p>
        </div>
      </section>

      <section className="products-list">
        <div className="container">
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                image={product.image}
                category={product.category}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};