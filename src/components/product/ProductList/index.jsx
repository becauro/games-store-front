import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NoFoundProducts from './NoFoundProducts';
import ProductCard from './ProductCard';
import GetAllProductsBtn from '../../../shared_components/GetAllProductsBtn';
import { productsActionsCreators } from '../../../store/ducks/products';
import './productList.css';

/* eslint-disable */

class ProductList extends Component {

  componentDidMount() {
    const { getAllProducts } = this.props;
    getAllProducts();
  }

  render() {
    const { 
      productsReducer: { 
        products,
        noFindProducts,
        inputText,
        loading
      },
    } = this.props;

    return loading ?  <h2 id="loading">Loading...</h2> : (
      <div className="product-list">    
        {!inputText && (
          <h3 id="home-initial-message">
            Type something for searching filter
          </h3>
        )}

        <div className="product-card-list">
          {noFindProducts ? (
            <>
              <NoFoundProducts />
              <GetAllProductsBtn />
            </>
          ) : (products
            .map(({ ...props }, index) => (
              <ProductCard key={ index } { ...props } />))
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ products: productsReducer }) => ({ productsReducer });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(productsActionsCreators, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
