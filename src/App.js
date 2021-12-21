import React from 'react';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Product from './pages/Product';
import ProductRegistration from './pages/ProductRegistration';
import UserRegistration from './pages/UserRegistration';
import Checkout from './pages/Checkout';

function App() {
 return (

    <Routes>
       <Route exact path="/" element={ <Home/> } />
       <Route path="/login" element={ <Login /> } />
       <Route path="/cart" element={ <Cart /> } />
       <Route path="/product/:id" element={ <Product/> } />
       <Route path="/product/registration" element={ <ProductRegistration/> } />
       <Route path="/user/registration" element={ <UserRegistration/> } />
       <Route path="/checkout" element={ <Checkout/> } />
    </Routes>

 );
}

export default App;