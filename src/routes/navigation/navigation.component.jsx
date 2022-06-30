import React, { Fragment, useContext } from "react";
import "./navigation.styles.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../components/context/user.context";
import { signOutUser } from "../../utility/firebase/firebase.utils";
import  CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartItemContext} from "../../components/context/cartItem.context";
function Navigation() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const {isCartOpen} = useContext(CartItemContext)
  console.log(currentUser);
  const signOutHandler = async () => {
    await signOutUser();

    setCurrentUser(null);
  };
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            HOME
          </Link>
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/signin">
              SIGNIN
            </Link>
          )}
          <CartIcon/>
        </div>
        {isCartOpen && <CartDropdown/>}
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
