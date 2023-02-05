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

  const sum = cartProducts.reduce((acc, item) => ( acc + parseInt(item.choosenQty)), 0 );
    return (
    <div className="header">
      <button type="button" className='home-button' onClick={ () => navigate('/') }> Home </button>
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