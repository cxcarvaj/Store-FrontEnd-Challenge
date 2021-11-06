import * as actionTypes from './Shopping-types';

export const addToCart = (productId) => {
    return{
        type: actionTypes.ADD_TO_CART,
        payload:{
            productId
        }
    };
};

export const removeFromCart = (productId) => {
    return{
        type: actionTypes.REMOVE_FROM_CART,
        payload:{
            productId
        }
    };
};

export const adjustQty = (productId, value) => {
    return{
        type: actionTypes.ADJUST_QTY,
        payload:{
            productId,
            qty: value
        }
    };
};

export const loadCurrentItem = (product) => {
    return{
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: product
    };
};
