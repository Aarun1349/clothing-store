import { useContext } from "react";
import Button from "../button/button.component";
import { CartItemContext } from "../../context/cartItem.context";
import "./product-card.styles.scss";
// import "./product-card.styles.scss";
const ProductCard = ({ product }) => {
  const { imageUrl, id, name, price } = product;

  const { addItemToCart } = useContext(CartItemContext);
  const addProductToCart = () => addItemToCart(product);
  return (
    <div key={id} className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType="inverted"
        onClick={addProductToCart}
        children="ADD TO CART"
      ></Button>
    </div>
  );
};
export default ProductCard;
