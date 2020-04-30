import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div className="bg-header">
        <div className="logo">
          <img
            src="http://www.avratech.org.il/wp-content/uploads/2015/11/avratech_logo.png"
            alt=""
          />
        </div>
        <div className="logon-user">hello ariel</div>
      </div>
    );
  }
}

export default Header;
