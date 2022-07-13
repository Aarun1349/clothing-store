import React, { Fragment, useContext } from "react";
// import "./navigation.styles.jsx";
import {
  NavigationContainer,
  LogoContainer,
  NavigationLinkContainer,
  NavLink,
} from "./navigation.styles";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utility/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartItemContext } from "../../context/cartItem.context";
function Navigation() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartItemContext);
  console.log(currentUser);
  const signOutHandler = async () => {
    await signOutUser();

    setCurrentUser(null);
  };
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>

        <NavigationLinkContainer>
          {/* {/* <Link className="nav-link" to="/">
            HOME
          </Link> */}
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/signin">SIGNIN</NavLink>
          )}
          <CartIcon />
        </NavigationLinkContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
}

export default Navigation;
