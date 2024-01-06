import React, { useState } from "react";
import '../css/navbar.css'
import logo from "../assets/Logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import { useCart } from "../context/cart";
import cartIcon from "../assets/cart.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [auth] = useAuth();
  const [cart] = useCart();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/cartPage");
  };

  const handleProductClick = () => {
    if (auth.token) {
      navigate("/product");
    } else {
      navigate("/login");
    }
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="Navbar">
      <div className="left-nav">
        <img
          onClick={() => navigate("/")}
          className="logo-img"
          src={logo}
          alt="Logo"
        />
      </div>
      <div className="right-nav">
        <ul className={`ul-elements ${showMobileMenu ? "show-mobile-menu" : ""}`}>
          <li className="product-li" onClick={handleProductClick}>
            <span className="product-li-link">Product</span>
          </li>
          {auth.token ? (
            <>
              <li className="category-li">
                <NavLink to="/" className="category-li-link">
                  Category
                </NavLink>
              </li>
              <li className="return-orders">
                <NavLink to="/" className="category-li-link">
                  Return Orders
                </NavLink>
              </li>
            </>
          ) : (
            <li className="login-li">
              <NavLink to="/login" className="login-li-link">
                Login
              </NavLink>
            </li>
          )}
          <li className="cart-img" onClick={handleCartClick}>
            <img className="cart-img-icon" src={cartIcon} alt="Cart" />
            <span className="cart-count">{cart?.length}</span>
          </li>
        </ul>
        <div className="mobile-toggle" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
