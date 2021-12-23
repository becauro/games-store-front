import React from 'react';
import './cart.css'
import Header from '../shared_components/Header';

export default class Cart extends React.Component {
    // constructor() {}

    render() {
      return (
        <div className="cart-page">
          <Header />
          <h2>I am Cart</h2>
        </div>
      )
    }
}