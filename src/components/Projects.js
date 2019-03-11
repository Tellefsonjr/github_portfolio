import React, { Component, PropTypes } from 'react';
import "../stylesheets/Projects.css";
import image from "../images/preview.jpg";
import Project from "./Project.js";

/**
 * Projects
 */
export class Projects extends Component {


  render() {
    return (
      <div className="section row justify-content-center">
        <div id="projectSection" className="col-lg-12 col-xs-12">
          <div className="text-center text-dark">
              <h3 className="display-4 lined"><span className="title"> Projects </span></h3>
            <h3 className="lead"><small> I am proficient in...  </small></h3>
          </div>
          <div className = "card-scroll-container d-flex flex-row flex-nowrap">
            <Project
              image={image}
              title={"Project 1"}
              description={" This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}
              link={"/"}
              source={"/"}
              badges={["Ruby", "React"]}
            />
            <Project
              image={image}
              title={"Project 2"}
              description={"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. "}
              link={"/"}
              source={"/"}
              badges={["NodeJS", "React"]}
            />
            <Project
              image={image}
              title={"Project 3"}
              description={" This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}
              link={"/"}
              source={"/"}
              badges={["Ruby", "React"]}
            />
            </div>
          </div>
        </div>
    );
  }
}

// Projects.propTypes = {
//   prop: PropTypes.type.isRequired
// }

export default Projects;
