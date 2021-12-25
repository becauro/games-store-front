import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './cartList.css';

/* eslint-disable */

class CartSubtotal extends Component {

  constructor() {
    super();

    this.state = {
      sumSubTotal: 0,
      sumQuantity: 0
    }

    this.sumItemsSubtotal = this.sumItemsSubtotal.bind(this);

  }

  componentDidMount() {
    this.sumItemsSubtotal();
  }

  sumItemsSubtotal () {
    const { 
      cartReducer: { 
        cartProducts,
      },
    } = this.props;

    const sumQuantity = cartProducts.reduce((acc, item) => ( acc + parseInt(item.quantity)), 0 );
    const sumSubTotal = cartProducts.reduce((acc, item) => (acc + parseInt(item.productSubtotal)), 0 );
    this.setState({
      sumSubTotal,
      sumQuantity
    });
  }



  render() {
    const { cartReducer: { sumSubTotal, sumQuantity } } = this.props;

    return (
      <div className="cart-item-subtotal">
        <p>SubTotal ({sumQuantity} Item(s)): <span>R$ { sumSubTotal } </span></p> 
      </div>
    );
  }
}

const mapStateToProps = ({ cart: cartReducer }) => ({ cartReducer });

export default connect(mapStateToProps, null)(CartSubtotal);
