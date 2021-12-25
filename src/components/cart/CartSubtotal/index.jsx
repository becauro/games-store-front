import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './CartSubtotal.css';

/* eslint-disable */

function CartSubtotal ({ cartReducer: { sumSubTotal, sumQuantity } }) {
  const navigate = useNavigate();

  const toCheckoutOnclick = () => {
    navigate('/checkout');
  }

    return (
      <div className="cart-subtotal">
        <p>SubTotal ({sumQuantity} Item(s)): <span>R$ { sumSubTotal } </span></p> 
        <button onClick={ () => toCheckoutOnclick()}>
          Proceed to Checkout
        </button>
      </div>
    );
}

const mapStateToProps = ({ cart: cartReducer }) => ({ cartReducer });

export default connect(mapStateToProps, null)(CartSubtotal);
