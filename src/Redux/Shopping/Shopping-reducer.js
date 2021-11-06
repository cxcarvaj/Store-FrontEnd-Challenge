import * as actionTypes from "./Shopping-types";

const initial_state = {
  products: [],
  cart: [], //here I add the qty
  currentProduct: null,
};
const shopReducer = (state = initial_state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find(
        (prod) => prod.productId === action.payload.productId
      );
      const inCart = state.cart.find((item) =>
        item.productId === action.payload.productId ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.productId === action.payload.productId
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
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
    default:
      return state;
  }
};

export default shopReducer;
