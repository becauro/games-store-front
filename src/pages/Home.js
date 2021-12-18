import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import {
  getProductsFromCategoryAndQuery, getAllProducts
} from '../services/api';
import NoFoundProducts from '../components/NoFoundProducts';
import Card from '../components/Card';
import { GetAllProductsBtn } from '../components/GetAllProductsBtn';
import Header from '../components/Header';
import '../css/Home.css';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      noFindProducts: false,
      inputText: false,
      sum: 0,
    };

    this.header_SearchInputOnChange_Handler = this.header_SearchInputOnChange_Handler.bind(this);
    // this.header_SearchBtnOnClick_Handler = this.header_SearchBtnOnClick_Handler.bind(this);
  }
  
  componentDidMount() {
    const gameCategoryId = 'MLB1144';
    
    getAllProducts(gameCategoryId).then(({ results }) => (
      this.setState({ products: results }))
    );

      this.sumCartItems();
  }

  header_SearchInputOnChange_Handler ( target ) { 
    console.log('Tá mudando');

    this.setState({ [target.name]: target.value })
  };

  header_SearchBtnOnClick_Handler = () => {
    const { inputText, category } = this.state;

    getProductsFromCategoryAndQuery(category, inputText).then(({ results }) => ( // Should Implement it
      results.length === 0
        ? this.setState({ noFindProducts: true })
        : this.setState({ products: results })));
  };


  sumCartItems = () => {
    const objeto = { ...localStorage };

    const arrayJson = Object.values(objeto).map((e) => JSON.parse(e));

    this.setState({ sum: arrayJson.length });
  }

  getAllProductsCallback = () => {
    const gameCategoryId = 'MLB1144';

    getAllProducts(gameCategoryId).then(({ results }) => (
      this.setState({ noFindProducts: false, products: results }))
    );
  }

  render() {
    const { products, noFindProducts, category, inputText, sum } = this.state;
    const dataToHeader_Props = { sum, searchInputOnChange_Handler_Callback: this.header_SearchInputOnChange_Handler,
      searchBtnOnClick_Handler_Callback: this.header_SearchBtnOnClick_Handler };

    if (!products) return <h1>Loading...</h1>;
    return (
      <>    
        <Header { ...dataToHeader_Props } />

        {!category && !inputText && (
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
