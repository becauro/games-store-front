export const types = {
  ADD_TO_CART: 'add_to_cart',
  REMOVE_FROM_CART: 'remove_from_cart',
  UPDATE_CART: 'update_cart'
}

const INITIAL_STATE = {
  cartProducts: [],
}

let CLONE_STATE = [];

export default function cartProductsReducer (state = INITIAL_STATE, { type, payload } ) {
  switch (type) {
    case types.ADD_TO_CART:
      CLONE_STATE = { ...state, cartProducts: [ ...state.cartProducts, payload ] };
      return CLONE_STATE;
    case types.REMOVE_FROM_CART:
      CLONE_STATE = {
        ...state, cartProducts: state.cartProducts.filter(product => product.id !== payload)
      };
      return CLONE_STATE;
    case types.UPDATE_CART:
      CLONE_STATE = {
        ...state,
        cartProducts: state.cartProducts.map((product) => {
          if (product.id === payload.id) {
            console.log('Aqui foi');
            const { productSubtotal, quantity } = payload;
            console.log('subtotal que chegou no reducer');
            console.log(productSubtotal);
            return { ...product, productSubtotal, quantity };
          } 
          return product
        })
      };
      return CLONE_STATE;
    default:
      CLONE_STATE = state;
      return CLONE_STATE;
  }
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