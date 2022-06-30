import { useContext } from "react";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";
import { CartItemContext } from "../context/cartItem.context";
const CartDropdown = () => {
  const { cartItems } = useContext(CartItemContext);
  console.log(cartItems);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-item">
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItems={item} />;
        })}
      </div>
      <Button children="CHECKOUT"></Button>
    </div>
  );
};

export default CartDropdown;
