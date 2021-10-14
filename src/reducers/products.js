import * as types from "./../constants/actionTypes.js";

var initialState = [
  {
    id: 1,
    name: "iPhone 7plus",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/78124/iphone-7-plus-vanghong-1-1-org.jpg",
    description: "Product made by apple",
    price: 500,
    inventory: 10,
    rate: 4,
  },
  {
    id: 2,
    name: "iPhone XR",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/190325/iphone-xr-vang-1-1-org.jpg",
    description: "Product made by apple",
    price: 1500,
    inventory: 10,
    rate: 5,
  },
  {
    id: 3,
    name: "iPhone 11",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-xanh-la-1-1-org.jpg",
    description: "Product made by apple",
    price: 2000,
    inventory: 12,
    rate: 5,
  },
];
const myReducer = (state = initialState, action) => {
  localStorage.setItem("products", JSON.stringify(state));
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    default:
      return state;
  }
};

export default myReducer;
