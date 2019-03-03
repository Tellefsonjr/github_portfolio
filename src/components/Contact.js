import React, { Component, PropTypes } from 'react';
import "../stylesheets/Contact.css";
/**
 * Contact
 */

 // TO DO: Use Context API Theme to adjust font and icon color...

export class Contact extends Component { // eslint-disable-line react/prefer-stateless-function

  // TO DO: Set state of contact collapse open close to change icon

  render() {
    return (
      <div className="section row">
        <div id="contactSection" className="col-lg-12 col-xs-12 fluid-container text-center text-dark justify-content-center">
            <h3 className="display-4"> Contact Me </h3>
            <h3 className="lead"><small> If you've got a project that fits my skills, let me know!  </small></h3>
            <form className="mx-auto col-lg-6 collapse" id="collapseExample">
              <div className="form-group row">
                <label for="name-input" className="col-2 col-offset-1 text-right col-form-label">Name</label>
              <div className="col-10">
                  <input className="form-control" type="text" placeholder="" id="name-input" />
                </div>
              </div>
              <div className="form-group row">
                <label for="email-input" className="col-2 col-offset-1 text-right col-form-label">Email</label>
              <div className="col-10">
                  <input className="form-control" type="email" placeholder="" id="email-input" />
                </div>
              </div>
              <div className="form-group row">
                <label for="subject-input" className="col-2 col-offset-1 text-right col-form-label">Subject:</label>
              <div className="col-10">
                  <input className="form-control" type="text" placeholder="" id="subject-input" />
                </div>
              </div>
              <div className="form-group row">
                <label for="body-input" className="col-2 col-offset-1 text-right col-form-label">Body:</label>
              <div className="col-10">
                  <textarea className="form-control" rows="4" placeholder="" id="body-input" />
                </div>
              </div>
              <button type="submit" className="btn btn-default float-right">Submit</button>
            </form>
            <div className="col-12 float-right">
              <span className="fas fa-envelope text-dark" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"></span>
            </div>

        </div>
      </div>
    );
  }
}

// Contact.propTypes = {
//   prop: PropTypes.type.isRequired
// }

export default Contact;
