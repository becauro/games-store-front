import React from 'react';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Product from './pages/Product';
import FormNewProduct from './pages/FormNewProduct';
import UserRegistrationForm from './pages/UserRegistrationForm';
import Checkout from './pages/Checkout';

function App() {
 return (

    <Routes>
       <Route exact path="/" element={ <Home/> } />
       <Route path="/login" element={ <Login /> } />
       <Route path="/cart" element={ <Cart /> } />
       <Route path="/product/:id" element={ <Product/> } />
       <Route path="/product/new" element={ <FormNewProduct/> } />
       <Route path="/user/registration" element={ <UserRegistrationForm/> } />
       <Route path="/checkout" element={ <Checkout/> } />
    </Routes>

 );
}

export default App;