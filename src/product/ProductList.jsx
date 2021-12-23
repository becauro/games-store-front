import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NoFoundProducts from '../components/NoFoundProducts';
import ProductCard from '../components/ProductCard';
import { GetAllProductsBtn } from '../components/GetAllProductsBtn';
import Header from '../components/Header';
import { searchActionsCreators } from '../store/ducks/search';
import './productList.css';

/* eslint-disable */

class NewProductList extends Component {

  componentDidMount() {
    const { getAllProducts } = this.props; // This comes from 'searchActionsCreators' (A Redux action Creator)
    getAllProducts();
  }

  render() {
    const { searchReducer: { noFindProducts, products, inputText }, classNameStyle } = this.props;

    if (!products) return <h1>Loading...</h1>;
    return (
      <div className={ classNameStyle }>    
        <Header />
        {!inputText && (
          <p data-testid="home-initial-message" id="home-initial-message">
            Type something for searching filter
          </p>
        )}

        <div className="product-card-list">
          {noFindProducts ? (
            <>
              <NoFoundProducts />
              <GetAllProductsBtn getAllProductsCallback={ this.getAllProductsCallback } />
            </>
          ) : (products
            .map(({ ...props }, index) => (
              <ProductCard key={ index } { ...props } sumCartItems={ this.sumCartItems } />))
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ search: searchReducer }) => ({ searchReducer });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(searchActionsCreators, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(NewProductList);
