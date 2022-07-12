import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartItemContext } from "../../context/cartItem.context";

const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemFromCart, removeItemCompletely } =
    useContext(CartItemContext);
  const { id, name, imageUrl, price, quantity } = cartItem;
  return (
    <div key={id} className="checkout-item-container">
      <div className="image-container">
        <img className="" src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemFromCart(cartItem)}>
          &#10094;
        </div>
        {quantity}
        <div className="arrow" onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => removeItemCompletely(cartItem)}
      >
        &#10060;
      </div>
    </div>
  );
};

export default CheckoutItem;
