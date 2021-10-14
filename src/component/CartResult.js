import React from "react";

import { connect } from "react-redux";

class CartResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  showTotalMoney = (carts) => {
    return carts.reduce((total, cart) => {
      var result = cart.product.price * cart.quantity;
      return total + result;
    }, 0);
  };
  render() {
    const { carts } = this.props;
    return (
      <tr>
        <td colSpan="3"></td>
        <td>
          <h4>
            <strong>Tổng Tiền</strong>
          </h4>
        </td>
        <td>
          <h4>
            <strong>{this.showTotalMoney(carts)}</strong>
          </h4>
        </td>
        <td colSpan="3">
          <button
            type="button"
            className="btn btn-primary waves-effect waves-light"
          >
            Complete purchase
            <i className="fa fa-angle-right right"></i>
          </button>
        </td>
      </tr>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(CartResult);
