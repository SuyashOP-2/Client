import React from 'react';
import axios from 'axios';
import { useSearch } from '../context/search';
import { useNavigate } from 'react-router-dom';
import '../css/searchInput.css'

const SearchInput = () => {
  const [search, setSearch] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(`https://dummyjson.com/products/search?q=${search.keyword}`);
      setSearch({ ...search, results: data.products });
      navigate('/search');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input
          className='search-input-text'
          type="search"
          value={search.keyword}
          onChange={(e) => setSearch({ ...search, keyword: e.target.value })}
        />
        <button className="btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
