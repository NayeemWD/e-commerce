import {
  ADD_TO_CART,
  INCREASE_QTY,
  DECREASE_QTY,
  REMOVE_FROM_CART,
} from "../actions/cartActions.jsx";

const initialState = {
  cart: [],
};

const parsePrice = (price) => {
  const num = parseFloat(String(price).replace(/[^0-9.-]+/g, ""));
  return isNaN(num) ? 0 : num;
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const product = action.payload;
      const existing = state.cart.find((i) => i.id === product.id);
      if (existing) {
        // Don't change quantity when adding from product list — qty should be managed from the cart page
        return state;
      }

      const unitPrice = parsePrice(product.price);
      const cartItem = { ...product, qty: 1, unitPrice };

      return {
        ...state,
        cart: [...state.cart, cartItem],
      };
    }

    case INCREASE_QTY: {
      const id = action.payload;
      return {
        ...state,
        cart: state.cart.map((i) =>
          i.id === id ? { ...i, qty: i.qty + 1 } : i
        ),
      };
    }

    case DECREASE_QTY: {
      const id = action.payload;
      const target = state.cart.find((i) => i.id === id);
      if (!target) return state;
      if (target.qty <= 1) {
        // Do not remove here; keep minimum qty as 1. Use the Remove action to delete the item.
        return state;
      }
      return {
        ...state,
        cart: state.cart.map((i) =>
          i.id === id ? { ...i, qty: i.qty - 1 } : i
        ),
      };
    }

    case REMOVE_FROM_CART: {
      const id = action.payload;
      return {
        ...state,
        cart: state.cart.filter((i) => i.id !== id),
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
