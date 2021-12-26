export const types = {
  ADD_TO_CART: 'add_to_cart',
  REMOVE_FROM_CART: 'remove_from_cart',
  UPDATE_CART: 'update_cart'
}

const INITIAL_STATE = {
  cartProducts: [],
  sumSubTotal: 0,
  sumQuantity: 0
}

let NEW_STATE = {};

export default function cartProductsReducer (state = INITIAL_STATE, { type, payload } ) {
  switch (type) {
    case types.ADD_TO_CART:
      NEW_STATE = { ...state, cartProducts: [ ...state.cartProducts, payload ] };
      return updateQtyAndTotal(NEW_STATE);

    case types.REMOVE_FROM_CART:
      NEW_STATE = {
        ...state, cartProducts: state.cartProducts.filter(product => product.id !== payload)
      };
      return updateQtyAndTotal(NEW_STATE);
    case types.UPDATE_CART:
      NEW_STATE = {
        ...state,
        cartProducts: state.cartProducts.map((product) => {
          if (product.id === payload.id) {
            const { productSubtotal, choosenQty } = payload;
            return { ...product, productSubtotal, choosenQty };
          } 
          return product
        })
      };
      return updateQtyAndTotal(NEW_STATE);
    default:
      return updateQtyAndTotal(state);
  }
}


const updateQtyAndTotal = (newState) => {
  const { cartProducts } = newState;
  const sumQuantity = cartProducts.reduce((acc, item) => ( acc + parseInt(item.choosenQty)), 0 );
  const sumSubTotal = cartProducts.reduce((acc, item) => (acc + parseInt(item.productSubtotal)), 0 );

  return { ...newState, sumQuantity, sumSubTotal };
}

  const addToCart = (payload) => ({
    type: types.ADD_TO_CART,
    payload
  })

  const removeFromCart = (payload) => ({
    type: types.REMOVE_FROM_CART,
    payload
  })

  const updateCart = (payload) => ({
    type: types.UPDATE_CART,
    payload
  })

export const cartActionsCreators = {
  addToCart,
  removeFromCart,
  updateCart
}