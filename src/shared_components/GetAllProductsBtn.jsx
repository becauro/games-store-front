import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { productsActionsCreators } from '../store/ducks/products';
/* eslint-disable */

class GetAllProductsBtn extends Component {


  render() {
    const { getAllProducts } = this.props;

    return (
      <button
        type='button'
        onClick={ () => getAllProducts() }
      >
        Load All Products
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(productsActionsCreators, dispatch)
};

export default connect(null, mapDispatchToProps)(GetAllProductsBtn);