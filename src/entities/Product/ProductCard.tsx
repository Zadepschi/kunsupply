import "./ProductCard.css";

type ProductCardProps = {
  name: string;
  image: string;
  category: string;
  description: string;
};

export const ProductCard = ({
  name,
  image,
  category,
  description,
}: ProductCardProps) => {
  return (
    <article className="product-card">
      <img
        src={image}
        alt={name}
        className="product-card__image"
      />

      <div className="product-card__content">
        <span className="product-card__category">
          {category}
        </span>

        <h3 className="product-card__title">
          {name}
        </h3>

        <p className="product-card__description">
          {description}
        </p>

        <a
          href="/contact"
          className="product-card__button"
        >
          Request Quote
        </a>
      </div>
    </article>
  );
};