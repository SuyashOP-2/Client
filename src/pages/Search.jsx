import React from "react";
import { useSearch } from "../context/search";
import '../css/search.css'

const Search = () => {
  const [search] = useSearch();

  return (
    <div className="search-container">
      <h2 className="search-header">Search Results</h2>
      <div className="search-functionality">
        {search.results.map((product) => (
          <div key={product.id}>
            <div className="search-img-icon">
              <img
                className="product-img"
                src={product.images[0]}
                alt={product.title}
              />
            </div>
            <p>{product.description}</p>
            <p>Brand: {product.brand}</p>
            <p>Category: {product.category}</p>
            <p>Discount Percentage: {product.discountPercentage}%</p>
            <p>Rating: {product.rating}</p>
            <p>Stock: {product.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;