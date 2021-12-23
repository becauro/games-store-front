import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CartProductCard from './CartProductCard';
import { creators as cartActionsCreators } from '../../../store/ducks/cart';
import './cartList.css';

/* eslint-disable */

class NewProductList extends Component {

  render() {
    const { 
      cartReducer: { 
        cartProducts,
      },
    } = this.props;
  console.log('cartProducts em CartList:');
  console.log(cartProducts);

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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(cartActionsCreators, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(NewProductList);
