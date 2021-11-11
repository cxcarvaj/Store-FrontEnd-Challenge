import * as actionTypes from "./Shopping-types";

const initial_state = {
  products: [],
  cart:[], //here I add the qty
  currentProduct: null,
};
const shopReducer = (state = initial_state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      console.log('action.payload:',action.payload)
      const item = state.products.find(
        (prod) => prod.productId === action.payload.data.productId
      );
      const inCart = state.cart.find((item) =>
        item.productId === action.payload.data.productId ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? (state.cart.map((item) =>
              item.productId === action.payload.data.productId
                ? { ...item, qty: action.payload.qty }
                : item
            ))
          : [...state.cart, { ...item, qty: action.payload.qty }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
          ...state,
          cart: state.cart.filter(item => item.productId !== action.payload.productId)
      };
    case actionTypes.ADJUST_QTY:
      return {
          ...state,
          cart: state.cart.map(item => item.productId === action.payload.productId ? {...item, qyt:action.payload.qyt} : item)
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
          ...state,
          currentProduct: action.payload,
      };
    case actionTypes.LOAD_ALL_ITEMS:
      return{
        ...state,
        products: action.payload
      }
    default:
      return state;
  }
};

export default shopReducer;
