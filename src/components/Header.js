import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
/* eslint-disable */

export default class Header extends React.Component {

  searchInputOnChangeHandler = ({target}) => {
    const { searchInputOnChange_Handler_Callback } = this.props; 
    searchInputOnChange_Handler_Callback(target);
  }

  searchBtnOnClickHandler = () => {
    const { searchBtnOnClick_Handler_Callback } = this.props;
    searchBtnOnClick_Handler_Callback();
  }

    render() {
      const { sum } = this.props;
        return (
        <div className="header">
          <div className="search-input">
            <input
              className="input-text"
              name="inputText"
              data-testid="query-input"
              type="text"
              onChange={ this.searchInputOnChangeHandler }
            />
            <button
              className="search-button"
              type="button"
              data-testid="query-button"
              onClick={ this.searchBtnOnClickHandler }
            >
              Search
            </button>
          </div>

        <Link className="cart-button" data-testid="shopping-cart-button" to="cart">
          Cart 🛒 &nbsp;
          <span data-testid="shopping-cart-size">
            { sum }
          </span>
        </Link>
      </div>
      )
    }
}