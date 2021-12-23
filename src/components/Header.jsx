import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/Header.css';
import Search from './Search';
/* eslint-disable */

class NewHeader extends React.Component {

  render() {
    const { cartReducer: { cartProducts } } = this.props;
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
}

const mapStateToProps = ({ cart: cartReducer }) => ({ cartReducer });

export default connect(mapStateToProps, null)(NewHeader)