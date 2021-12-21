export const types = {
  ADD_TO_CART: 'add_to_cart',
  REMOVE_FROM_CART: 'remove_from_cart',
  UPDATE_CART: 'update_cart'
}

const INITIAL_STATE = {
  cartProducts: [],
}

export default function cartProductsReducer (state = INITIAL_STATE, { type, payload } ) {
  switch (type) {
    case types.ADD_TO_CART:
      return { ...state, cartProducts: [ ...state.cartProducts, payload ] };
    case types.REMOVE_FROM_CART:
      return {
        ...state, cartProducts: state.cartProducts.filter(product => product.id !== payload)
      };
    case types.UPDATE_CART:
      return {
        ...state,
        cartProducts: state.cartProducts.map((product) => { 
          if (product.id === payload.id) {
            return { ...product, quantity: payload };
          } 
          return product
        })
    };
    default:
      return state;
  }
}

export const creators = {

  addToCart: (payload) => ({
    type: types.ADD_TO_CART,
    payload
  }),
  removeFromCart: (payload) => ({
    type: types.REMOVE_FROM_CART,
    payload
  }),
  updateCart: (payload) => ({
    type: types.UPDATE_CART,
    payload
  }),
}

