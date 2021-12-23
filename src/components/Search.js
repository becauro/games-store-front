import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { searchActionsCreators } from '../store/ducks/search';
import '../styles/Header.css';
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
  return bindActionCreators(searchActionsCreators, dispatch)
};

// const searchWithRouter = withRouter(Search);
export default connect(null, mapDispatchToProps)(Search);