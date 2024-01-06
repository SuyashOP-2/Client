import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Prices } from '../components/Prices.js';
import { useCart } from '../context/cart.jsx';
import { useAuth } from '../context/auth.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/product.css';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [productItems, setProductItems] = useState([]);
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handlePriceRangeClick = (priceRange) => {
    setSelectedPriceRange(priceRange);
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get('https://dummyjson.com/products');
        setProductItems(res.data.products);
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, []);

  const handleAddToCart = (product) => {
    if (auth.token) {
      setCart([...cart, product]);
      localStorage.setItem('cart', JSON.stringify([...cart, product]));
      if (typeof toast !== 'undefined') {
        toast.success('Item Added to cart');
      } else {
        console.warn('Toast not defined. Item Added to cart');
      }
    } else {
      navigate('/login');
    }
  };

  const handleRemoveFromCart = (productId) => {
    if (auth.token) {
      const updatedCart = cart.filter((product) => product.id !== productId);
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      if (typeof toast !== 'undefined') {
        toast.success('Item Removed from cart');
      } else {
        console.warn('Toast not defined. Item Removed from cart');
      }
    } else {
      navigate('/login');
    }
  };

  const filteredProducts = selectedPriceRange
    ? productItems.filter((product) => {
        const price = product.price;
        return price >= selectedPriceRange.array[0] && price <= selectedPriceRange.array[1];
      })
    : productItems;

  return (
    <div className="Product-filter-div">
      <div className="filter-price-div">
        <span className="filter-price-div">Filter</span>
        <div className="prices-display">
          {Prices.map((priceRange) => (
            <button
              key={priceRange.id}
              className={`price-actual ${selectedPriceRange === priceRange ? 'active' : ''}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '120px',
                height: '30px',
                margin: '0 5px',
                alignItems: 'center',
                boxSizing: 'border-box',
                paddingTop: '0.4rem',
              }}
              onClick={() => handlePriceRangeClick(priceRange)}
            >
              {priceRange.name}
            </button>
          ))}
        </div>
      </div>
      <div className="Product-content-page">
        {filteredProducts.map((product) => (
          <div className="product-display-list" key={product.id}>
            <div className="product-box">
              <img className="product-img" src={product.images[0]} alt={product.title} />
              <p className="product-title">{product.title}</p>
              <p className="product-price">Rs {product.price}</p>
              <div className="button-add-to-remove">
                <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
                <button
                  className="remove-from-cart"
                  onClick={() => handleRemoveFromCart(product.id)}
                >
                  Delete Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Product;
