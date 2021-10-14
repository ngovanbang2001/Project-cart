import React from "react";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showRating(rate) {
    var result = [];
    for (var i = 0; i < rate; i++) {
      result.push(
        <li key={i}>
          <i className="fa fa-star"></i>
        </li>
      );
    }
    for (var j = 0; j < 5 - rate; j++) {
      result.push(
        <li key={j + "o"}>
          <i className="fa fa-star-o"></i>
        </li>
      );
    }

    return result;
  }
  render() {
    var { product } = this.props;

    return (
      <div className="col-lg-4 col-md-6 mb-r same">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src={product.image} className="img-fluid" alt="" />
            <a href="/#">
              <div className="mask waves-light waves-effect waves-light"></div>
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a href="/#">{product.name}</a>
              </strong>
            </h4>
            <ul className="rating">{this.showRating(product.rate)}</ul>
            <p className="card-text">{product.description}</p>
            <div className="card-footer">
              <span className="left">{product.price}$</span>
              <span
                className="right"
                onClick={() => {
                  this.props.onPurchase(this.props.product);
                }}
              >
                <a
                  href
                  className="btn-floating blue-gradient"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Add to Cart"
                >
                  <i className="fa fa-shopping-cart"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
