import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './CartSubtotal.css';

/* eslint-disable */

function CartSubtotal ({ cartReducer: { cartProducts, sumSubTotal, sumQuantity } }) {
  const navigate = useNavigate();
  const [cartEmpty, setEmpty] = useState(true)
  const [cartEmptyMsg, setEmptyMsg] = useState('')

  useEffect(() => {
    if (cartProducts.length === 0) {
      setEmpty(true);
    } else { setEmpty(false) };
  });

  const toCheckoutOnclick = () => {
    if (cartEmpty === false) {
      navigate('/checkout');
    } else {
      setEmptyMsg('Cannot checkout from empty cart')
    }
  }

    return (
      <div className="cart-subtotal">
        <p>SubTotal ({sumQuantity} Item(s)): <span>R$ { sumSubTotal } </span></p> 
        <button type="button" onClick={ () => toCheckoutOnclick()}>
          Proceed to Checkout
        </button>
        <span>{cartEmptyMsg}</span>
      </div>
    );
}

const mapStateToProps = ({ cart: cartReducer }) => ({ cartReducer });

export default connect(mapStateToProps, null)(CartSubtotal);
