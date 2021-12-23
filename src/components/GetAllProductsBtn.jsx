import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchActionsCreators } from '../store/ducks/search';
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
  return bindActionCreators(searchActionsCreators, dispatch)
};

export default connect(null, mapDispatchToProps)(GetAllProductsBtn);