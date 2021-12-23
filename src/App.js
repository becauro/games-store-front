import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './home-page';
import Login from './login-page';
import Cart from './cart-page';
import ProductDetails from './productDetails-page';
import ProductRegistration from './productRegistration-page';
import UserRegistration from './userRegistration-page';
import Checkout from './checkout-page';

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