import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { creators as cartActionsCreators } from '../../../../store/ducks/cart';
import './ProductCard.css';

class ProductCard extends Component {

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

    console.log('props em CartCard');
    console.log(this.props);
    
    return (
      <div className="product-card">
        <Link
          className="link-product-card"
          to={ {
            pathname: "/cart",
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
