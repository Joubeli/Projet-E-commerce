import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADJUST_QTY,
} from "../constants/actionType";

const initialState = {
  products: [],
  cart: [],
};

const reducerShop = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      // Get the items data from products array
      const item = state.products.find((prod) => prod.id === payload.id);
      // Check if item is in cart already 
      const inCart = state.cart.find((item) =>
        item.id === payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) => item.id === payload.id ? { ...item, qty: item.qty + 1 } : item)
          : [...state.cart, { ...item, qty: 1 }]
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id),
      };

    case ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map( (item) => 
          item.id === payload.id 
          ? { ...item, qty: payload.qty } 
          : item
        ),
      };

    default:
      return state;
  }
};

export default reducerShop;
