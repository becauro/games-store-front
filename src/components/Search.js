import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchActionsCreators } from '../store/ducks/search';
import '../styles/Header.css';
/* eslint-disable */

class Search extends React.Component {

  render() {
    const { fieldOnChange, getFilteredProducts } = this.props;
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
            onClick={ () => getFilteredProducts() }
          >
            Search
          </button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(searchActionsCreators, dispatch)
};

export default connect(null, mapDispatchToProps)(Search);