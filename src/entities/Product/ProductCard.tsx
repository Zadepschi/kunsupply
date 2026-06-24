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

        <h3>{name}</h3>

        <p>{description}</p>

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