import { fetchAllProducts, fetchFilteredProducts } from '../../api/meli_ecommerce';

export const types = {
  FIELD_ON_CHANGE: 'fieldOnChange',
  PICK_UP_ALL_PRODUCTS: 'pickUpAllProducts',
  PICK_UP_ALL_PRODUCTS_SUCCESS: 'pickUpAllProductsSuccess',
  PICK_UP_ALL_PRODUCTS_ERROR: 'pickUpAllProductsError',
  PICK_UP_FILTERED_PRODUCTS: 'pickUpFilteredProducts',
  PICK_UP_FILTERED_PRODUCTS_SUCCESS: 'pickUpFilteredProductsSuccess',
  PICK_UP_FILTERED_PRODUCTS_ERROR: 'pickUpFilteredProductsError',
}

const INITIAL_STATE = {
  products: [],
  noFindProducts: false,
  inputText: '',
  loading: false,
  error: null
}

let inputText = '';

export default function searchProductsReducer (state = INITIAL_STATE, { type, payload } ) {
  switch (type) {
    case types.FIELD_ON_CHANGE:
      inputText = payload.value;
      return { ...state, [payload.name]: payload.value };
    case types.PICK_UP_ALL_PRODUCTS:
      return {
        ...state, loading: true
      };
    case types.PICK_UP_ALL_PRODUCTS_SUCCESS:
      return {
        ...state, loading: false, products: payload
      };
    case types.PICK_UP_ALL_PRODUCTS_ERROR:
      return {
        ...state, loading: false, error: payload
    }
    case types.PICK_UP_FILTERED_PRODUCTS:
      return {
        ...state, loading: true
      };
    case types.PICK_UP_FILTERED_PRODUCTS_SUCCESS:

      if (payload.length === 0) {
        return {
          ...state,
          loading: false,
          noFindProducts: true
        }
      } else {
        return {
          ...state,
          loading: false,
          products: payload
        }
    }
    case types.PICK_UP_FILTERED_PRODUCTS_ERROR:
      return {
        ...state, loading: false, error: payload
      }
    default:
      return state;
  }
}

const fieldOnChange = (payload) => ({
  type: types.FIELD_ON_CHANGE,
  payload
})
const pickUpAllProducts = () => ({
  type: types.PICK_UP_ALL_PRODUCTS,
})
const pickUpAllProductsSuccess = (payload) => ({
  type: types.PICK_UP_ALL_PRODUCTS_SUCCESS,
  payload
})
const pickUpAllProductsError = (payload) => ({
  type: types.PICK_UP_ALL_PRODUCTS_ERROR,
  payload
})
const pickUpFilteredProducts = () => ({
  type: types.PICK_UP_FILTERED_PRODUCTS,
})
const pickUpFilteredProductsSuccess = (payload) => ({
  type: types.PICK_UP_FILTERED_PRODUCTS_SUCCESS,
  payload
})
const pickUpFilteredProductsError = (payload) => ({
  type: types.PICK_UP_FILTERED_PRODUCTS_ERROR,
  payload
})

export const searchActionsCreators = {

  fieldOnChange,
  getAllProducts: () => (dispatch) => {
    dispatch(pickUpAllProducts());

    return fetchAllProducts()
    .then(({results}) => dispatch(pickUpAllProductsSuccess(results)))
    .catch((error) => dispatch(pickUpAllProductsError(error)))
  },
  getFilteredProducts: () => (dispatch) => {
    dispatch(pickUpFilteredProducts());
    
    return fetchFilteredProducts(inputText)
    .then(({results}) => dispatch(pickUpFilteredProductsSuccess(results)))
    .catch((error) => dispatch(pickUpFilteredProductsError(error)))
  }
}

