import { combineReducers } from "redux";
import { shoppingCartReducer } from "./shoppingCartReducer";
import { menuReducer } from "./menuReducer";
import { updateOrderId } from "./updateOrderID";
import { orderCreatedReducer } from "./orderCreatedReducer";
import { blogReducer } from "./blogReducer";
import { historyReducer } from './historyReducer';
import { updatePage } from './viewOrderPagination';

export default combineReducers({
  shoppingCartReducer,
  menuReducer,
  updateOrderId,
  orderCreatedReducer,
  blogReducer,
  historyReducer,
  updatePage
});
