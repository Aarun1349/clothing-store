import { useContext } from "react";
import {useNavigate} from 'react-router-dom'
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";
import { CartItemContext } from "../../context/cartItem.context";

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartItemContext);
  console.log(cartItems);
  const checkoutHandler =()=>{
    navigate('/checkout')
  }
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItems={item} />;
        })}
      </div>
      <Button onClick={checkoutHandler} children="CHECKOUT"></Button>
    </div>
  );
};

export default CartDropdown;
