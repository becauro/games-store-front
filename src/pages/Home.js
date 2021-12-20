import React, { Component } from 'react';
import {
  getProductsFromCategoryAndQuery, getAllProducts
} from '../services/api';
import NoFoundProducts from '../components/NoFoundProducts';
import Card from '../components/Card';
import { GetAllProductsBtn } from '../components/GetAllProductsBtn';
import Header from '../components/Header';
import '../styles/Home.css';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      noFindProducts: false,
      inputText: false,
      sum: 0,
    };
  }
  
  componentDidMount() {
    const gameCategoryId = 'MLB1144';
    
    getAllProducts(gameCategoryId).then(({ results }) => (
      this.setState({ products: results }))
      );
      
      this.sumCartItems();
    }
    
  header_SearchInputOnChange_Handler = ( target ) => {
    
    this.setState({ [target.name]: target.value })
  };
    
  header_SearchBtnOnClick_Handler = () => {
    const { inputText, category } = this.state;
    getProductsFromCategoryAndQuery(category, inputText).then(({ results }) => {
      results.length === 0
        ? this.setState({ noFindProducts: true })
        : this.setState({ noFindProducts: false, products: results })});
  };
  
  sumCartItems = () => {
    const objeto = { ...localStorage };

    const arrayJson = Object.values(objeto).map((e) => JSON.parse(e));
    
    this.setState({ sum: arrayJson.length });
  }

  /* 
  The follow function (getAllProductsCallback) is implemented like this just because 
  it consumes a public API, which is used for frontEnd test in that first moment.
  This function structure and name and params need be change in the future,
  because they will must be implemented for consume an private API which part of this application backend.
  */
  getAllProductsCallback = () => {
    const gameCategoryId = 'MLB1144';

    getAllProducts(gameCategoryId).then(({ results }) => (
      this.setState({ noFindProducts: false, products: results }))
    );
  }

  render() {
    const { products, noFindProducts, inputText, sum } = this.state;
    const dataToHeader_Props = { sum, searchInputOnChange_Handler_Callback: this.header_SearchInputOnChange_Handler,
      searchBtnOnClick_Handler_Callback: this.header_SearchBtnOnClick_Handler };

    if (!products) return <h1>Loading...</h1>;
    return (
      <>    
        <Header { ...dataToHeader_Props } />

        {!inputText && (
          <p data-testid="home-initial-message" id="home-initial-message">
            Type something for searching filter
          </p>
        )}

        <div className="cards-container">
          {noFindProducts ? (
            <>
              <NoFoundProducts />
              < GetAllProductsBtn getAllProductsCallback={ this.getAllProductsCallback } />
            </>
          ) : (products
            .map(({ ...props }, index) => (
              <Card key={ index } { ...props } sumCartItems={ this.sumCartItems } />))
          )}
        </div>
      </>
    );
  }
}
