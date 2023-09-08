import React, {useState} from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

import { ReactComponent as Logo } from "../../assets/watch.svg";

import "./header.styles.scss";

import { auth } from "../../firebase/firebase.utils";

import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.components";
import CartDropdown from "../cartDropdown/cart-dropdown.component";

const Header = ({ currentUser, hidden }) => {

  const [cart, setCart] =useState(false);

  const handleSetCart = ()=>{
    setCart((prevState)=>{
      setCart(!prevState);
    })
  }

return (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="Logo"></Logo>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option loginLink" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link to="/signin" className="option loginLink">
          SIGN IN
        </Link>
      )}
      <CartIcon handleSetCart={handleSetCart} />
    </div>
    {
      (cart)?<CartDropdown  handleSetCart={handleSetCart}/>:null
    }
  </div>
);
  }

const mapStateToProps = (state)=>{
  return {
    currentUser : state.user.currentUser,

  }
}

export default connect(mapStateToProps)(Header);
