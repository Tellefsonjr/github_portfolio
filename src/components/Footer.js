import React, { Component, PropTypes } from 'react';
import "../stylesheets/Footer.css";
/**
 * Footer
 */
export class Footer extends Component {
  render() {
    return (
      <div className="">
        <div className="section row footer">
          <div id="footerSection" className="col-lg-12 col-xs-12 fluid-container text-center text-dark">
            <a href="https://github.com/Tellefsonjr" ><span className="fab fa-github" /></a>
            <a href="https://www.linkedin.com/in/timmeyellefson/" ><span className="fab fa-linkedin" /></a>
            <a href="/" ><span className="fas fa-file-download" /></a>
          </div>
        </div>
      </div>
    );
  }
}

// Spacer.propTypes = {
//   prop: PropTypes.type.isRequired
// }

export default Footer;
