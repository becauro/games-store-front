import React, { Component } from 'react';
/* eslint-disable */

export class GetAllProductsBtn extends Component {

  handler = () => {
    const { getAllProductsCallback } = this.props;

    getAllProductsCallback();
  }

  render() {
    return (
      <button
        type='button'
        onClick={ this.handler }
      >
        Load All Products
      </button>
    );
  }
}