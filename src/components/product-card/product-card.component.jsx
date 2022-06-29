import Button from "../button/button.component";
import "./product-card.styles.scss";
// import "./product-card.styles.scss";
const ProductCard = ({ product }) => {
  const { imageUrl, id, name, price } = product;
  console.log(product);
  return (
    <div key={id} className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" childern="ADD TO CART">
        ADD TO CART
      </Button>
    </div>
  );
};
export default ProductCard;
