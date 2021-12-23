import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cartActionsCreators } from '../../../../store/ducks/cart';
import './ProductCard.css';

class ProductCard extends Component {
  constructor() {
    super();
    this.state = {
      inCart: false,
    };

    this.handleOnClickCartBtn = this.handleOnClickCartBtn.bind(this);
    this.sendToCart = this.sendToCart.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
  }

  componentDidMount() {
    this.setCartBtnLabel();
  }

  handleOnClickCartBtn() {

    const { id, cartReducer: { cartProducts } } = this.props;
    const foundProdutct = cartProducts.some(item => item.id === id);


    if (foundProdutct) {
      this.deleteFromCart();
      this.setState({ inCart: false });
    } else {
      this.sendToCart();
      this.setState({ inCart: true });
    }

  }

  setCartBtnLabel = () => {

    const { id, cartReducer: { cartProducts } } = this.props;
    const foundProdutct = cartProducts.some(item => item.id === id);

    if (foundProdutct) {
      this.setState({ inCart: true });
    } else {
      this.setState({ inCart: false });
    }
  }

  deleteFromCart() {
    const { id, removeFromCart } = this.props;

    removeFromCart(id);
  }

  sendToCart() {

    const { title, price, thumbnail, id, attributes, shipping,
      available_quantity: availableQuantity, addToCart } = this.props;

    const object = {
      quantity: 1,
      price,
      thumbnail,
      id,
      attributes,
      title,
      shipping,
      availableQuantity,
    };

    addToCart(object);
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

    const { inCart } = this.state;

    return (
      <div className="product-card">
        <Link
          className="link-product-card"
          to={ {
            pathname: `/product/details/${id}`,
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
            <p>Frete Grátis!</p>
          ) : null}
          <p className="price">
            R$
            {price}
          </p>
          <p> Available quantity: {availableQuantity}</p>
        </Link>
        <button
          className="add-cart-button"
          onClick={ () => this.handleOnClickCartBtn() }
          type="button"
        >
          { !inCart ? 'Add to Cart' : 'Remove from Cart' }
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ cart: cartReducer }) => ({ cartReducer });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(cartActionsCreators, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);

ProductCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  id: PropTypes.string,
  free_shipping: PropTypes.bool,
}.isRequired;
