import * as actionTypes from "./Shopping-types";

const initial_state = {
  products: [],
  cart: [{
    "status": 200,
    "data": {
        "product": {
            "id": "6180171cf2f0b945aee5a085",
            "productId": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5NjQzMDM3MjQ3MjM=",
            "handle": "clay-plant-pot",
            "images": [
                {
                    "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODE0ODgwNTE=",
                    "width": 925,
                    "height": 617,
                    "altText": null,
                    "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/single-sprout-in-a-pot_925x_a2fda6d5-838f-4b90-80af-6e5931c30e32.jpg?v=1635538742"
                },
                {
                    "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODE1MjA4MTk=",
                    "width": 925,
                    "height": 617,
                    "altText": null,
                    "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/pot-with-a-single-sprout_925x_cef24a3c-7954-4df2-9e42-b86821c1535c.jpg?v=1635538742"
                }
            ],
            "productType": "Outdoor",
            "tags": [
                "Plants",
                "Pot"
            ],
            "title": "Clay Plant Pot",
            "variants": [
                {
                    "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDgyNzI5OTk4NzYzNQ==",
                    "title": "Regular",
                    "quantityAvailable": 30,
                    "image": {
                        "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODE0ODgwNTE=",
                        "width": 925,
                        "height": 617,
                        "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/single-sprout-in-a-pot_925x_a2fda6d5-838f-4b90-80af-6e5931c30e32.jpg?v=1635538742"
                    },
                    "price": "9.99",
                    "requiresShipping": true,
                    "weightUnit": "KILOGRAMS"
                },
                {
                    "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDgyNzMwMDAyMDQwMw==",
                    "title": "Large",
                    "quantityAvailable": 30,
                    "image": {
                        "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMzAxNTkyODE1MjA4MTk=",
                        "width": 925,
                        "height": 617,
                        "originalSrc": "https://cdn.shopify.com/s/files/1/0566/2995/2691/products/pot-with-a-single-sprout_925x_cef24a3c-7954-4df2-9e42-b86821c1535c.jpg?v=1635538742"
                    },
                    "price": "15.99",
                    "requiresShipping": true,
                    "weightUnit": "KILOGRAMS"
                }
            ],
            "merchant": "617c5783a49149dd7609766f",
            "createdAt": "2021-10-29T20:19:01.000Z",
            "publishedAt": "2021-10-29T22:07:20.000Z",
            "updatedAt": "2021-11-01T16:22:02.000Z"
        }
    }, qty: 1
}], //here I add the qty
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
