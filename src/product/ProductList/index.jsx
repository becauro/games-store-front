import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NoFoundProducts from '../NoFoundProducts';
import ProductCard from '../ProductCard';
import GetAllProductsBtn from '../../shared_components/GetAllProductsBtn';
// import Header from '../components/Header';
import { searchActionsCreators } from '../../store/ducks/search';
import './productList.css';

/* eslint-disable */

class NewProductList extends Component {

  componentDidMount() {
    const { getAllProducts } = this.props;
    getAllProducts();
  }

  render() {
    const { 
      searchReducer: { 
        products,
        noFindProducts,
        inputText,
        loading
      },
      classNameStyle
    } = this.props;

    if (loading) return <h1>Loading...</h1>;

    return (
      <div className={ classNameStyle }>    
        {!inputText && (
          <p data-testid="home-initial-message" id="home-initial-message">
            Type something for searching filter
          </p>
        )}

        <div className="product-card-list">
          {noFindProducts ? (
            <>
              <NoFoundProducts />
              <GetAllProductsBtn />
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
