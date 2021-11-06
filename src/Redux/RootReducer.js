import { combineReducers } from "redux";
import ShoppingReducer from './Shopping/Shopping-reducer';

const RootReducer = combineReducers(
    {
        shop: ShoppingReducer
    }
);

export default RootReducer;