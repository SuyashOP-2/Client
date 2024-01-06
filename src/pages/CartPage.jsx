import React from "react";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import "../css/cartpage.css";

const CartPage = () => {
  const [cart] = useCart();

  return (
    <div className="cart-page">
      <div className="cart-heading">
        <h2 className="cart-page-heading">Your Cart</h2>
      </div>
      <div className="cart-content-div">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="ul-list-cart">
            {cart.map((item) => (
              <li key={item.id}>
                <div className="product-img-cart">
                  <img
                    className="product-img-icons"
                    src={item.thumbnail}
                    alt={item.title}
                  />
                </div>
                <div className="item-price-name">
                <strong className="item-title">{`${item.title} - Rs ${item.price}`}</strong>
                </div>
                <div className="ul-list-card-render">
                  <p>{item.description}</p>
                  <p>Brand: {item.brand}</p>
                  <p>Category: {item.category}</p>
                  <p>Discount Percentage: {item.discountPercentage}%</p>
                  <p>Rating: {item.rating}</p>
                  <p>Stock: {item.stock}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CartPage;
