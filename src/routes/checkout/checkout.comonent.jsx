import "./checkout.styles.scss";
import { useContext } from "react";
import { CartItemContext } from "../../context/cartItem.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, cartTotal } =
    useContext(CartItemContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((items) => {
        // const { id, name, quantity } = items;
        return <CheckoutItem key={items.id} cartItem={items} />;
      })}
      <span className="total">Total : ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
