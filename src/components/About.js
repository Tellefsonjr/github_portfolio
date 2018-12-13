import React, { Component, PropTypes } from 'react';
import avatar from "../images/Avatar.JPG";
import "../stylesheets/About.css"
/**
 * Home
 */
export class About extends Component {
  render() {
    return (
      <div className="section">
        <div id="avatarWrapper">
          <img id="avatar" src={avatar} className="img-fluid rounded-circle mx-auto d-block" alt="Avatar" />
          <div className="text-center text-light">
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
