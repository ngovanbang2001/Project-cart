import React from "react";
import { connect } from "react-redux";
import * as action from "../action/index.js";
import Product from "../component/Product.js";

class ProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onPurchase = this.props.onPurchase.bind(this);
  }
  onPurchase(product) {
    this.props.onPurchase(product);
  }
  showProduct = (products) => {
    return products.map((product, index) => (
      <Product key={index} onPurchase={this.onPurchase} product={product} />
    ));
  };
  render() {
    const { products } = this.props;
    return this.showProduct(products);
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
    carts: state.carts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onPurchase: (product) => {
      dispatch(action.onPurchase(product, 1));
    },
    onDeleteCart: (product) => {
      dispatch(action.onDeleteCart(product));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
