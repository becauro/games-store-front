import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  getProductsFromCategoryAndQuery, getAllProducts
} from '../services/api';
import NoFoundProducts from './NoFoundProducts';
import Card from './Card';
import '../css/Home.css';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      api: [],
      products: [],
      noFindProducts: false,
      inputText: false,
      category: false,
      sum: 0,
    };
  }

  componentDidMount() {
    getAllProducts('Games').then((response) => this.setState({ api: response }));
    this.sumCartItems();
  }

  handle = ({ target }) => this.setState({ [target.name]: target.value });

//   handleSearch = () => {
//     const { inputText, category } = this.state;

//     getProductsFromCategoryAndQuery(category, inputText).then(({ results }) => ( // Should Implement it
//       results.length === 0
//         ? this.setState({ noFindProducts: true })
//         : this.setState({ products: results })));
//   };


  sumCartItems = () => {
    const objeto = { ...localStorage };

    const arrayJson = Object.values(objeto).map((e) => JSON.parse(e));

    this.setState({ sum: arrayJson.length });
  }

  render() {
    const { products, noFindProducts, category, inputText, sum } = this.state;
    if (!products) return <h1>carregando...</h1>;
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
              onChange={ this.handle }
            />
            <button
              className="button"
              type="button"
              data-testid="query-button"
              onClick={ this.handleSearch }
            >
              Buscar
            </button>
          </div>

          <Link className="cart" data-testid="shopping-cart-button" to="cart">
            Carrinho 🛒
            <span data-testid="shopping-cart-size">
              { sum }
            </span>
          </Link>
        </div>

        {!category && !inputText && (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        )}

        <div className="cards-container">
          {noFindProducts ? (<NoFoundProducts />) : (products
            .map(({ ...props }, index) => (
              <Card key={ index } { ...props } sumCartItems={ this.sumCartItems } />))
          )}
        </div>
      </>
    );
  }
}
