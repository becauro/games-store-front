import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  getProductsFromCategoryAndQuery, getAllProducts
} from '../services/api';
import NoFoundProducts from '../components/NoFoundProducts';
import Card from '../components/Card';
import { GetAllProductsBtn } from '../components/GetAllProductsBtn';
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
  }

  componentDidMount() {
    const gameCategoryId = 'MLB1144';
    
    getAllProducts(gameCategoryId).then(({ results }) => (
      this.setState({ products: results }))
    );

      this.sumCartItems();
  }

  handleOnChange = ({ target }) => this.setState({ [target.name]: target.value });

  handleSearch = () => {
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
    if (!products) return <h1>Loading...</h1>;
    return (
      <>    
        <div className="container">
          <div className="search-input">
            <input
              className="input-text"
              name="inputText"
              data-testid="query-input"
              type="text"
              placeholder="Digite aqui"
              onChange={ this.handleOnChange }
            />
            <button
              className="button"
              type="button"
              data-testid="query-button"
              onClick={ this.handleSearch }
            >
              Search
            </button>
          </div>

          <Link className="cart" data-testid="shopping-cart-button" to="cart">
            Cart 🛒 &nbsp;
            <span data-testid="shopping-cart-size">
              { sum }
            </span>
          </Link>
        </div>

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
