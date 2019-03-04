import React, { Component, PropTypes } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
/**
 * Header
 */
export class Header extends Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    console.log("HELLOOO", e);
  }

  render() {
    return (
      <div>
        <nav id="navbar" className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          {/* <a className="navbar-brand" href="#">Navbar</a> */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto mx-auto">
              <li className="nav-item">
                <Link activeClass="active" className="nav-link" to="aboutSection" spy={true} smooth={true} offset={-80} duration={500} onSetActive={this.handleSetActive}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link activeClass="active" className="nav-link" to="projectSection" spy={true} smooth={true} offset={-56} duration={500} onSetActive={this.handleSetActive}>
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link activeClass="active" className="nav-link" to="contactSection" spy={true} smooth={true} offset={-56} duration={500} onSetActive={this.handleSetActive}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

// Header.propTypes = {
//   prop: PropTypes.type.isRequired
// }

export default Header;
