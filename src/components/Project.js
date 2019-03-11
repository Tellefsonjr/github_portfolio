import React, { Component, PropTypes } from 'react';
import image from "../images/preview.jpg";
import "../stylesheets/Projects.css"
/**
 * Home
 */

// TO DO: Use Context API to adjust dark theme and color

export class Project extends Component {

  render() {
    var listBadges = this.props.badges.map(function(badge,i){
      console.log("BADGE", badge);
      return(
        <span key={i} className={"badge badge-pill badge-default "+ badge}> {badge} </span>

      );
    });
    return (
      <div className="card card-body">
      <h4 className="card-title">{this.props.title}</h4>
      <div className="card-block">
        <img className="card-img-top" src={this.props.image} alt="Card cap" />
        <p className="card-text">{this.props.description}</p>
          <div className="float-right">
            <a href={this.props.link} className=""> <span className="fas fa-link"></span></a>
            <a href={this.props.source} className=""> <span className="fas fa-code"></span></a>
          </div>
          <p className="card-text"> {listBadges} </p>
        </div>
      </div>
    );
  }
}

// Project.propTypes = {
//   prop: PropTypes.type.isRequired
// }

export default Project;
