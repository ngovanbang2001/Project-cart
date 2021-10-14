import * as types from "./../constants/actionTypes.js";
export const onPurchase = (product, quantity) => {
  return {
    type: types.ADD_TO_CART,
    product,
    quantity,
  };
};
export const onDeleteCart = (cart) => {
  return {
    type: types.DELETEPRODUCT_CART,
    cart,
  };
};
export const onChangeCart = (cart, value) => {
  return {
    type: types.CHANGEQUANTITY_CART,
    cart,
    value,
  };
};
