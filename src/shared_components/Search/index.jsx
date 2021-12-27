// import React, { useState } from 'react';  // Comment 1
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { productsActionsCreators } from '../../store/ducks/products';
import './Search.css';

/* eslint-disable */

/* commnet 1 is about to change to React state to control "inputText" 
It's seems Redux dev tools get Frozen when use controller component with Redux
*/

function Search({ getFilteredProducts, fieldOnChange }) {
  const navigate = useNavigate();
  // const [inputText, setInputText] = useState('');  // Comment 1
  const { pathname} = useLocation();

  function searchButton_onclick () {
    // getFilteredProducts(inputText); // Comment 1
    getFilteredProducts();
    if(pathname !== '/') {
      navigate('/');
      return;
    }
  }

  // function inputTextOnChange(target) { // commnet 1
  //   const { value } = target;
  //   setInputText(value);
  // }

  return (
    <div>
      <div className="search-input">
        <input
          className="input-text"
          name="inputText"
          data-testid="query-input"
          type="text"
          onChange={ ({target}) => fieldOnChange(target) }
          // onChange={ ({target}) => inputTextOnChange(target) } // commnet 1
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