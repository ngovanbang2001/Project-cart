import React from "react";

import { connect } from "react-redux";

import ProductContainer from "./../containers/ProductContainer.js";
import CartContainer from "./../containers/CartContainer.js";
import Message from "./Message.js";
class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className="mainContainer">
        <div className="container">
          <section className="section">
            <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
            <div className="row">
              <ProductContainer />
            </div>
          </section>
          <Message />
          <CartContainer />
        </div>
      </main>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Container);
