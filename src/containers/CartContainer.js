import React from "react";
import { connect } from "react-redux";
import * as action from "../action/index.js";
import Cart from "../component/Cart.js";
import CartResult from "../component/CartResult.js";
import CartItem from "../component/CartItem.js";
class CartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.showCartItem = this.showCartItem.bind(this);
    this.showCartResult = this.showCartResult.bind(this);
    this.onChangeCart = this.onChangeCart.bind(this);
  }
  onChangeCart(cart, value) {
    this.props.onChangeCart(cart, value);
  }
  showCartItem(carts) {
    return carts.map((cart, index) => (
      <CartItem
        key={index}
        cart={cart}
        onChangeCart={this.onChangeCart}
        onDeleteCart={() => this.props.onDeleteCart(cart)}
      />
    ));
  }
  showCartResult(carts) {
    return <CartResult carts={carts}></CartResult>;
  }
  render() {
    const { carts } = this.props;
    return (
      <Cart>
        {this.showCartItem(carts)}
        {this.showCartResult(carts)}
      </Cart>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    carts: state.carts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteCart: (cart) => {
      dispatch(action.onDeleteCart(cart));
    },
    onChangeCart: (cart, value) => {
      dispatch(action.onChangeCart(cart, value));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
