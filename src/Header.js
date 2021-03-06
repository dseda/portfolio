import React, { Component } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./Header.css";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotating: false,
      menuOpen: false,
    };
    this.toggleRotate = this.toggleRotate.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleRotate(e) {
    this.setState((st) => {
      return { rotating: !st.rotating };
    });
  }
  toggleMenu() {
    this.setState((st) => {
      return { menuOpen: !st.menuOpen };
    });
  }
  render() {
    const rotating = this.state.rotating;
    return (
      <header
        className="Header"
        onMouseEnter={this.toggleRotate}
        onMouseLeave={this.toggleRotate}
      >
        <Link to="/" className="Logo-link">
          <div className="Logo">
            <i className={`fab fa-stripe-s ${rotating ? "rotating" : ""}`}></i>

            <span>eda.dev</span>
          </div>
        </Link>

        <Navbar menuOpen={this.state.menuOpen} toggleMenu={this.toggleMenu} />
      </header>
    );
  }
}

export default Header;
