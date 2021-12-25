import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.css';
import Search from '../Search';
/* eslint-disable */

function Header({cartReducer: { cartProducts }}) {
  const navigate = useNavigate();
  const { pathname} = useLocation();

  const cartButton_onclick = () => {
    if(pathname !== '/cart') {
      navigate('/cart');
      return;
    }
  }

  const sum = cartProducts.length;
    return (
    <div className="header">
      <Search />
      <button type="button" className="cart-button" onClick={ () => cartButton_onclick() }>
        Cart 🛒 &nbsp;
        <span>
          { sum }
        </span>
      </button>
    </div>
  )
}

const mapStateToProps = ({ cart: cartReducer }) => ({ cartReducer });

export default connect(mapStateToProps, null)(Header)