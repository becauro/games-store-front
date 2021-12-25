import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.css';
import Search from '../Search';
/* eslint-disable */

function Header({cartReducer: { cartProducts }}) {

  const sum = cartProducts.length;
    return (
    <div className="header">
      <Search />
      <Link className="cart-button" to="cart">
        Cart 🛒 &nbsp;
        <span>
          { sum }
        </span>
      </Link>
    </div>
  )
}

const mapStateToProps = ({ cart: cartReducer }) => ({ cartReducer });

export default connect(mapStateToProps, null)(Header)