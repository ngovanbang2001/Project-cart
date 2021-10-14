import * as types from "../constants/actionTypes.js";
const data = JSON.parse(localStorage.getItem("carts"));
var initialState = data ? data : [];
const myReducer = (state = initialState, action) => {
  const findIndex = (id) => {
    const carts = state;
    var result = -1;
    carts.forEach((cart, index) => {
      if (cart.id === id) {
        result = index;
      }
    });
    return result;
  };
  switch (action.type) {
    case types.ADD_TO_CART:
      var count = -1;
      const { product, quantity } = action;
      state.forEach((cart, index) => {
        if (product.id === cart.product.id) {
          count = 1;
          return cart.quantity++;
        }
      });
      if (count === -1) {
        const ob = {
          product,
          quantity,
        };
        state.push(ob);
      }

      localStorage.setItem("carts", JSON.stringify(state));
      return [...state];

    case types.DELETEPRODUCT_CART:
      const arr = state;
      const key = findIndex(action.cart.product.id);
      arr.splice(key, 1);
      state = arr;
      localStorage.setItem("carts", JSON.stringify(state));
      return [...state];
    case types.CHANGEQUANTITY_CART:
      const { cart, value } = action;
      if (cart.quantity <= 1) {
        if (value > 0) {
          cart.quantity += value;
        }
      } else {
        cart.quantity += value;
      }
      localStorage.setItem("carts", JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
};

export default myReducer;
