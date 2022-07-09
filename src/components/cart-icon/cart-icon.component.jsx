// import {cart-icon} from './src/assets/shopping-bag.svg'
import "../../components/cart-icon/cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartItemContext } from "../context/cartItem.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen,cartCount } = useContext(CartItemContext);
  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);

  };
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};
export default CartIcon;
