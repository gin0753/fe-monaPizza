import { combineReducers } from "redux";
import { shoppingCartReducer } from './shoppingCartReducer';
import { productDetailsReducer } from './productDetailsReducer';


export default combineReducers({
    shoppingCartReducer,
    productDetailsReducer
});