import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './CartProductCard.css';

class CartProductCard extends React.Component {
  constructor() {
    super();

    this.state = {
      moreQty: false,
      inputQty: '0'
    };

    this.cartItemQty_Handler = this.cartItemQty_Handler.bind(this);
    this.fieldOnChange = this.fieldOnChange.bind(this);
  }

  componentDidUpdate() {
    const { inputQty } = this.state;
    console.log(inputQty);
  }

  cartItemQty_Handler(target) {
    if (target.value === '+10') {
      this.setState({
        moreQty: true
      })
    }
  }

  fieldOnChange(target) {
    this.setState({
      [target.name]: target.value
    });
  }

  render() {
    const { moreQty } = this.state;

    const {
      title,
      price,
      thumbnail,
      shipping,
      availableQuantity 
    } = this.props;
    
    return (
      <div className="cart-product-card">
        <div className="cart-item-image">
          <img src={ thumbnail } alt={ title } />
        </div>
          <div className='cart-item-description'>
            <p className="cart-item-title">{title}</p>
            {shipping.free_shipping ? (
              <p>Free shipping!</p>
            ) : null}
            <p className="cart-item-price">
              R$ {price}
            </p>
            <p> Available quantity: {availableQuantity}</p>
          </div>
          <div className='cart-item-inputs'>
            <span>Qty:</span> &nbsp;
            { !moreQty
              ? <select name="inputQty" onClick={ ({target}) => this.cartItemQty_Handler(target)}
                  onChange={ ({target}) => this.fieldOnChange(target) }
                >
                {['1', '2', '3', '4', '5', '6', '7', '8', '9', '+10']
                  .map((item) =>
                    (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    )
                  )
                }
              </select>
              : <input name="inputQty" type="text" autoFocus="autofocus"  onChange={ ({target}) => this.fieldOnChange(target) } />
            }
          </div>
          <div className="cart-item-subtotal">
            <p>SubTotal (by Item): <span>R$ </span></p> 
          </div>
      </div>
    );
  }
}

const mapStateToProps = ({ cart: cartReducer }) => ({ cartReducer });

export default connect(mapStateToProps, null)(CartProductCard);

CartProductCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  id: PropTypes.string,
  free_shipping: PropTypes.bool,
}.isRequired;
