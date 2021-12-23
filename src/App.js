import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Cart from './pages/cart';
import ProductDetails from './pages/productDetails';
import ProductRegistration from './pages/productRegistration';
import UserRegistration from './pages/userRegistration';
import Checkout from './pages/checkout';

function App() {
 return (

    <Routes>
       <Route exact path="/" element={ <Home/> } />
       <Route path="/login" element={ <Login /> } />
       <Route path="/cart" element={ <Cart /> } />
       <Route path="/product/details/:id" element={ <ProductDetails/> } />
       <Route path="/product/registration" element={ <ProductRegistration/> } />
       <Route path="/user/registration" element={ <UserRegistration/> } />
       <Route path="/checkout" element={ <Checkout/> } />
    </Routes>

 );
}

export default App;