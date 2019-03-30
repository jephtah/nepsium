import React, { Component } from "react";
import { Link } from "react-scroll";
import "../../styles/header.css";
import logo from "../../assets/logo.png";

class Header extends Component {
  state = {
    showMe: false
  };

  render() {

    // var showMe = false
    const { showMe } = this.state;

    return (
      <div className="header">
        <div className="navbar">
          <div className="logo">
            <Link to="nexus" spy={true} smooth={true} duration={500}>
              <img src={logo} alt="Nepsium Logo" />
            </Link>
          </div>
          <ul className={`${showMe ? 'm-menu' : 'menu'}`}>
            <li className="upper">
              <Link onClick={(e) => this.showMobileMenu(e)} activeClass="active" to="nexus" spy={true} smooth={true} duration={500}>
                Home</Link>
            </li>
            <li className="upper">
              <Link onClick={(e) => this.showMobileMenu(e)} activeClass="active" to="exchange" spy={true} smooth={true} offset={-93} duration={500}>
                About</Link>
            </li>
            <li className="upper">
              <Link onClick={(e) => this.showMobileMenu(e)} activeClass="active" to="token" spy={true} smooth={true} offset={-93} duration={500}>
                Token</Link>
            </li>
            <li className="upper">
              <Link onClick={(e) => this.showMobileMenu(e)} activeClass="active" to="roadmap" spy={true} smooth={true} offset={-93} duration={500}>
                Roadmap</Link>
            </li>
            <li className="upper">
              <Link onClick={(e) => this.showMobileMenu(e)} activeClass="active" to="team" spy={true} smooth={true} offset={-93} duration={500}>
                Team</Link>
            </li>
            <li className="upper">
              <Link onClick={(e) => this.showMobileMenu(e)} activeClass="active" to="footer" spy={true} smooth={true} offset={-93} duration={500}>
                Contact</Link>
            </li>
          </ul>
          <div className="buy-token">
            <button className="upper">Buy Token</button>
          </div>
          <div className="mobile-menu">
            <i className="fas fa-bars" onClick={(e) => this.showMobileMenu(e)}></i>
          </div>
        </div>
      </div>
    );
  }

  showMobileMenu(e) {
    e.preventDefault();
    this.setState({
      showMe: !this.state.showMe
    });
    console.log(this.state.showMe);
  }
}

export default Header;
