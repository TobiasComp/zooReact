import React, { Component } from "react";
import "./navbar.css";

class Navabr extends Component {
  state = {};
  render() {
    return (
      <ul className="nav-ul">
        <li onClick={this.navTo("domestics")}>Domestic</li>
        <li onClick={this.navTo("wilds")}>Wild</li>
        <li onClick={this.navTo("birds")}>Birds</li>
      </ul>
    );
  }

  navTo(panelName) {
    // this.props.activePanel
  }
}

export default Navabr;
