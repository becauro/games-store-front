import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { productsActionsCreators } from '../../store/ducks/products';

/* eslint-disable */

function Search({ getFilteredProducts, fieldOnChange }) {
  const navigate = useNavigate();
  const { pathname} = useLocation();

  function searchButton_onclick () {
    getFilteredProducts();
    if(pathname !== '/') {
      navigate('/');
      return;
    }
  }

  return (
    <div>
      <div className="search-input">
        <input
          className="input-text"
          name="inputText"
          data-testid="query-input"
          type="text"
          onChange={ ({target}) => fieldOnChange(target) }
        />
        <button
          className="search-button"
          type="button"
          data-testid="query-button"
          onClick={ () => searchButton_onclick() }
        >
          Search
        </button>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(productsActionsCreators, dispatch)
};

export default connect(null, mapDispatchToProps)(Search);