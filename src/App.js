import React from 'react';
import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Cart from './components/Cart';
import Product from './components/Product';
import FormNewProduct from './components/FormNewProduct';
import FormNewUser from './components/FormNewUser';
import Checkout from './components/Checkout';
 
function App() {
 return (
     <Routes>
       <Route exact path="/" element={ <Home/> } />
       <Route path="/login" element={ <Login /> } />
       <Route path="/cart" element={ <Cart /> } />
       <Route path="/product/:id" element={ <Product/>} />
       <Route path="/product/new" element={ <FormNewProduct/>} />
       <Route path="/user/new" element={ <FormNewUser/>} />
       <Route path="/checkout" element={ <Checkout/>} />
     </Routes>
 );
}
 
export default App;