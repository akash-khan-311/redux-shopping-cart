import { applyMiddleware, createStore } from "redux";
import {
  addManyQuantity,
  addProductQuantity,
  removeProductQuantity,
} from "./ProductsAdd/action";
import { ADD_TO_CART, DELETE_ITEM, REMOVE_FROM_CART } from "./cart/actionTypes";
import rootReducer from "./rootReducer";


const productManagmentMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_TO_CART:
      store.dispatch(removeProductQuantity(action.payload));
      return next(action);
    case REMOVE_FROM_CART:
      store.dispatch(addProductQuantity(action.payload));
      return next(action);
    case DELETE_ITEM:
      store.dispatch(addManyQuantity(action.payload));
      return next(action);

    default:
      return next(action);
  }
};

const store = createStore(
  rootReducer,
  applyMiddleware(productManagmentMiddleware)
);

export default store;
