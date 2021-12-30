import React from 'react';
import './cart.css'
import Header from '../../shared_components/Header';
import CartList from '../../components/cart/CartList';
import CartSubtotal from '../../components/cart/CartSubtotal';

// export default class Cart extends React.Component {
  export default function Cart() {
    // constructor() {}

  // render() {
    return (
      <div className="cart-page">
        <Header />
        <h1> Cart</h1>
        <CartList />
        <CartSubtotal />
      </div>
    )
  // }
}