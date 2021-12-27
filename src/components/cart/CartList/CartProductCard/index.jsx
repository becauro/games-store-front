import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cartActionsCreators } from '../../../../store/ducks/cart';
import './CartProductCard.css';

class CartProductCard extends React.Component {
  constructor() {
    super();

    this.state = {
      moreQty: false,
      inputQty: '1'
    }

    this.fieldOnChange = this.fieldOnChange.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
  }


  fieldOnChange(target) {
    const { moreQty } = this.state;
    const { value: choosenQty } = target;
    const { updateCart, id, price } = this.props;
    const productSubtotal = price * parseInt(choosenQty);
   
    if(choosenQty !== '10+' || moreQty) {

      this.setState({
        [target.name]: target.value
      });
      if (moreQty) return; 
      return updateCart({ id, productSubtotal, choosenQty });
    }

    this.setState({
      moreQty: true
    })
  }

  handleUpdateQty() {
    const { inputQty: choosenQty } = this.state;
    const { updateCart, id, price } = this.props;
    const productSubtotal = price * parseInt(choosenQty);
    updateCart({ id, productSubtotal, choosenQty });
  }

  deleteFromCart() {
    const { id, removeFromCart } = this.props;

    removeFromCart(id);
  }

  render() {
    const { moreQty } = this.state;

    const {
      title,
      price,
      thumbnail,
      choosenQty,
      availableQuantity,
      productSubtotal
    } = this.props;
    
    return (
      <div className="cart-product-card">
        <div className="cart-item-image">
          <img src={ thumbnail } alt={ title } />
        </div>
        <div className='cart-item-description'>
          <p className="cart-item-title">{title}</p>
          <p className="cart-item-price">
            R$ {price}
          </p>
          <p> Available quantity: {availableQuantity}</p>
        </div>
        <div className='cart-item-io'>
          <div className='cart-item-in-qty'>
            <span id="cart-item-in-qty-label">Qty:</span> &nbsp;
            { !moreQty
              ?
              <select name="inputQty" onChange={ ({target}) => this.fieldOnChange(target) }>
                {
                  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+']
                  .map((item) =>
                    (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    )
                  )
                }
              </select>
              :
              (
                <>
                  <input name="inputQty" type="text" autoFocus="autofocus"  onChange={ ({target}) => this.fieldOnChange(target) } />
                  <button id="cart-item-in-qty-button" type="button" onClick={ () => this.handleUpdateQty() }>Update Qty</button>
                </>
              )
            }
          </div>
          <span id="cart-item-out-qty"> Choosen Quantity: { choosenQty } </span>
          <button id="cart-item-io-remove-button" type="button" onClick={ () => this.deleteFromCart() }>Remove</button>
        </div>
        <div className="cart-item-subtotal">
          <p>SubTotal (by Item): <span>R$ { productSubtotal } </span></p> 
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ cart: cartReducer }) => ({ cartReducer });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(cartActionsCreators, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(CartProductCard);

CartProductCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  id: PropTypes.string,
}.isRequired;
