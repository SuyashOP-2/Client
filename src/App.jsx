import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Product from './components/Product';
import Login from './pages/Login'
import SearchInput from './components/SearchInput';
import CartPage from './pages/CartPage';
import Search from './pages/Search';
import Footer from './components/Fotter';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <Slider />
            <SearchInput />
            <Product />
            <Footer/>
          </>
        } />

        <Route path='/login' element={<Login />} />
        <Route path='/cartPage' element={<CartPage />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
};

export default App;
