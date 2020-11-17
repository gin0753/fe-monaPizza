import { combineReducers } from "redux";
import { shoppingCartReducer } from './shoppingCartReducer';
import { productDetailsReducer } from './productDetailsReducer';
import { menuReducer } from './menuReducer';
import { orderPizzaReducer } from './orderPizzaReducer';


export default combineReducers({
    shoppingCartReducer,
    productDetailsReducer,
    menuReducer,
    orderPizzaReducer
});