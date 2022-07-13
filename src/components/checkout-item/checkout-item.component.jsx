import {
  CheckoutItemContainer,
  ImageContainer,
  RemoveButton,
  Quantity,
  Price,
} from "./checkout-item.styles.jsx";
import { useContext } from "react";
import { CartItemContext } from "../../context/cartItem.context";

const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemFromCart, removeItemCompletely } =
    useContext(CartItemContext);
  const { id, name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer key={id}>
      <ImageContainer>
        <img className="" src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Price as="span" className="name">
        {name}
      </Price>
      <Quantity as="span">
        <div className="arrow" onClick={() => removeItemFromCart(cartItem)}>
          &#10094;
        </div>
        {quantity}
        <div className="arrow" onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </div>
      </Quantity>
      <span className="price">{price}</span>
      <RemoveButton onClick={() => removeItemCompletely(cartItem)}>
        &#10060;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
