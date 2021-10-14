import React from "react";

import Header from "./component/Header.js";
import Container from "./component/Container.js";
import Footer from "./component/Footer.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default App;
