import React, { Component } from "react";
import Navbar from "./Navbar";
import "./Header.css";
class Header extends Component {
  render() {
    return (
      <header>
        <div className="Logo">
          <div>
            <i className="fab fa-stripe-s 5x"></i>
          </div>
          <span>eda.</span>
        </div>
        <Navbar />
      </header>
    );
  }
}

export default Header;
