import React, { Component } from "react";
import "./Footer.css";
class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <p>© 2021 Seda Demir</p>
        <div className="Socials">
          <a href="https://github.com/dseda" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/seda-d-02743b185/"
            target="_blank"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
