import React, { useEffect } from 'react';
import './cart.css'
import Header from '../../shared_components/Header';
import CartList from '../../components/cart/CartList';
import CartSubtotal from '../../components/cart/CartSubtotal';

  export default function Cart() {

    useEffect(() => {
      window.scrollTo(0, 0)
    }, []);

    return (
      <div className="cart-page">
        <Header />
        <h1> Cart</h1>
        <CartList />
        <CartSubtotal />
      </div>
    )

}