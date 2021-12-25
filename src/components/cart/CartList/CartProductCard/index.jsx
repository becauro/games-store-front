import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './CartProductCard.css';

class CartProductCard extends Component {

  render() {
    const {
      title,
      price,
      thumbnail,
      shipping,
      availableQuantity 
    } = this.props;
    
    return (
      <div className="cart-product-card">
        <div className="cart-item-image">
          <img src={ thumbnail } alt={ title } />
        </div>
          <div className='cart-item-description'>
            <p className="cart-item-title">{title}</p>
            {shipping.free_shipping ? (
              <p>Free shipping!</p>
            ) : null}
            <p className="cart-item-price">
              R$ {price}
            </p>
            <p> Available quantity: {availableQuantity}</p>
          </div>
          <div className="cart-item-subtotal">
            <p>SubTotal (by Item): <span>R$ </span></p> 
          </div>
      </div>
    );
  }
}

const mapStateToProps = ({ cart: cartReducer }) => ({ cartReducer });

export default connect(mapStateToProps, null)(CartProductCard);

CartProductCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  id: PropTypes.string,
  free_shipping: PropTypes.bool,
}.isRequired;
