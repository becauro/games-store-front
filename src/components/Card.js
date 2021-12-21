import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { creators as cartActionsCreators } from '../store/ducks/cart';

import '../styles/Card.css';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      counter: 1,
      inCart: false,
    };

    this.handleOnClickCartBtn = this.handleOnClickCartBtn.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  componentDidMount() {
    this.setCartBtnLabel();
  }

  handleOnClickCartBtn() {
    const { props: { title } } = this;
    const { sumCartItems } = this.props;

    if (localStorage.getItem(title)) {
      this.removeFromCart();
      this.setState({ inCart: false });
    } else {
      this.addToCart();
      this.setState({ inCart: true });
    }
    sumCartItems();
  }

  setCartBtnLabel = () => {
    const { props: { title } } = this;

    if (localStorage.getItem(title)) {
      this.setState({ inCart: true });
    } else {
      this.setState({ inCart: false });
    }
  }

  removeFromCart() {
    const { props: { title } } = this;

    localStorage.removeItem(title);
  }

  addToCart() {
    const { props, state: { counter } } = this;
    const { title, price, thumbnail, id, attributes, available_quantity: availableQuantity } = props;

    const object = {
      counter,
      price,
      thumbnail,
      id,
      attributes,
      title,
      availableQuantity,
    };
    const json = JSON.stringify(object);
    localStorage.setItem(title, json);
  }

  render() {
    const {
      title,
      price,
      thumbnail,
      id,
      attributes,
      shipping,
      available_quantity: availableQuantity 
    } = this.props;

    const { counter, inCart } = this.state;
    return (
      <div className="container-card" data-testid="product">
        <Link
          className="link-card"
          data-testid="product-detail-link"
          to={ {
            pathname: `/produtos/${id}`,
            state: {
              title,
              price,
              thumbnail,
              id,
              attributes,
              shipping,
              availableQuantity,
            },
          } }
        >
          <p className="title">{title}</p>
          <img src={ thumbnail } alt={ title } />
          {shipping.free_shipping ? (
            <p data-testid="free-shipping">Frete Grátis!</p>
          ) : null}
          <p className="price">
            R$
            {price}
          </p>
          <p> Available quantity: {availableQuantity}</p>
        </Link>
        <button
          disabled={ counter > availableQuantity }
          className="add-cart-button"
          data-testid="product-add-to-cart"
          onClick={ this.handleOnClickCartBtn }
          type="button"
        >
          { !inCart ? 'Add to Cart' : 'Remove from Cart' }
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ cart: cartReducer }) => cartReducer;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(cartActionsCreators, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

Card.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  id: PropTypes.string,
  free_shipping: PropTypes.bool,
}.isRequired;
