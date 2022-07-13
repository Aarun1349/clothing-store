import { useContext } from "react";
import {useNavigate} from 'react-router-dom'
import Button,{BUTTON_TYPE_CLASSES} from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import{CartDropdownContainer,CartItems,EmptyMessage} from"./cart-dropdown.styles.jsx";
import { CartItemContext } from "../../context/cartItem.context";

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartItemContext);
  console.log(cartItems);
  const checkoutHandler =()=>{
    navigate('/checkout')
  }
  return (
    <CartDropdownContainer>
      <CartItems>

        {
          cartItems.length ? (cartItems.map((item) => {
            return <CartItem key={item.id} cartItems={item} />;
          })):
          (<EmptyMessage as ='span'>Your cart is empty</EmptyMessage>)
        }
        
      </CartItems>
      <Button buttonType={BUTTON_TYPE_CLASSES.base} style={{marginTop: "auto"}} onClick={checkoutHandler} children="CHECKOUT"></Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
