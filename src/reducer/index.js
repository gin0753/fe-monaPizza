import { combineReducers } from "redux";
import { shoppingCartReducer } from "./shoppingCartReducer";
import { productDetailsReducer } from "./productDetailsReducer";
import { menuReducer } from "./menuReducer";
import { updateOrderId } from "./updateOrderID";
import { orderCreatedReducer } from "./orderCreatedReducer";
import { blogReducer } from "./blogReducer";
import { historyReducer } from './historyReducer'

export default combineReducers({
  shoppingCartReducer,
  productDetailsReducer,
  menuReducer,
  updateOrderId,
  orderCreatedReducer,
  blogReducer,
  historyReducer
});
