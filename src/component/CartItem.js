import React from "react";

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  totalMoney = (cart) => {
    return cart.product.price * cart.quantity;
  };
  render() {
    var { cart } = this.props;
    return (
      <tr>
        <th scope="row">
          <img
            src={cart.product.image}
            alt=""
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{cart.product.name}</strong>
          </h5>
        </td>
        <td>{cart.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{cart.quantity} </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              className="btn btn-sm btn-primary
                                  btn-rounded waves-effect waves-light"
              onClick={() => this.props.onChangeCart(cart, -1)}
            >
              <a href>—</a>
            </label>
            <label
              className="btn btn-sm btn-primary
                                  btn-rounded waves-effect waves-light"
              onClick={() => this.props.onChangeCart(cart, 1)}
            >
              <a href>+</a>
            </label>
          </div>
        </td>
        <td>{this.totalMoney(cart)}</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
            onClick={() => this.props.onDeleteCart(cart)}
          >
            X
          </button>
        </td>
      </tr>
    );
  }
}

export default CartItem;
