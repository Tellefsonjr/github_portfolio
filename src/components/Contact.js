import React, { Component, PropTypes } from 'react';
import "../stylesheets/Contact.css";
/**
 * Contact
 */

 // TO DO: Use Context API Theme to adjust font and icon color...

export class Contact extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="section row">
        <div id="contactSection" className="col-lg-12 col-xs-12">
        <div className="text-center text-dark justify-content-center">
          <h3 className="display-4"> Contact Me </h3>
          <h3 className="lead"><small> If you've got a project that fits my skills, let me know!  </small></h3>
        <hr />
        <form className="mx-auto col-lg-6">
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
          <button type="submit" className="btn btn-primary float-right">Submit</button>
            <div className="col-11 float-right">
            </div>
        </form>


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
