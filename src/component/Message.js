import React from "react";
import { connect } from "react-redux";
class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { carts } = this.props;
    return (
      <h3>
        <span className="badge amber darken-2">
          {carts.length > 0
            ? "Mua Hàng Thành Công"
            : "Không có sản phẩm trong giỏ"}
          !
        </span>
      </h3>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    carts: state.carts,
  };
};
export default connect(mapStateToProps, null)(Message);
