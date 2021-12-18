import React, { Component } from 'react';
import { getAllProducts } from '../services/api';

export class GetAllProductsBtn extends Component {

  render() {
    return (
      <button
        type='button'
        onClick={ getAllProducts() }
      >
        
      </button>
    );
  }
}