import React, { Component, PropTypes } from 'react';
import avatar from "../images/Avatar.JPG";
import "../stylesheets/About.css"
/**
 * Home
 */

// TO DO: Use Context API to adjust dark theme and color

export class About extends Component {
  render() {
    return (
      <div id="aboutSection" className="section row justify-content-center" ref={this.props.refProp} data-spy="scroll" data-target="navbar" data-offset="0">
        <div id="avatarWrapper" className="col-lg-3 col-xs-10">
        <div className="text-center text-light">
          <img id="avatar" src={avatar} className="img-fluid rounded-circle" alt="Avatar" />
            <h3 className="display-4"> Tim Ellefson </h3>
            <h3 className="lead"><small> Full Stack Dev | API Enthusiast | Music Lover </small></h3>
            <a href="/" ><span className="fab fa-github" /> </a>
            <a href="/" ><span className="fab fa-linkedin" /> </a>
            <a href="/" ><span className="fas fa-file-download" /> </a>
          </div>

        </div>
      </div>
    );
  }
}

// About.propTypes = {
//   prop: PropTypes.type.isRequired
// }

export default About;
