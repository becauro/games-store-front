import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartProductCard from './CartProductCard';
import './cartList.css';

/* eslint-disable */

class CardList extends Component {

  render() {
    const { 
      cartReducer: { 
        cartProducts,
      },
    } = this.props;

    return (
      <div className="cart-list">
          {cartProducts.length === 0 ? (
              <h3>Empty Cart</h3>
          ) : (cartProducts
            .map(({ ...props }, index) => (
              <CartProductCard key={ index } { ...props } />))
          )}
      </div>
    );
  }
}

const mapStateToProps = ({ cart: cartReducer }) => ({ cartReducer });

export default connect(mapStateToProps, null)(CardList);
