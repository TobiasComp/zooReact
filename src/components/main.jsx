import React, { Component } from "react";
import Header from "./header";

class Main extends Component {
  state = {
    activePanel: "domestic",
  };

  render() {
    return <Header activePanel={this.state.activePanel} />;
  }
}

export default Main;
