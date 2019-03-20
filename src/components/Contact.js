import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import "../stylesheets/Contact.css";
/**
 * Contact
 */

 // TO DO: Use Context API Theme to adjust font and icon color...

export class Contact extends Component { // eslint-disable-line react/prefer-stateless-function
  state = {
      name: "",
      email: "",
      message: "",
      buttonText: "Send Message",
      sent: false
  }

  formSubmit = (e) => {
    e.preventDefault();
    this.setState({
      buttonText: 'Sending...'
    });
//url: https://docs.google.com/forms/d/e/1FAIpQLSflLheMadf-AJO4m9rg0FdFJIkrelvJiKDPhskbZYHzwleSng/viewform?usp=pp_url&entry.1097062134=bogusName&entry.1615728613=email@domain.com&entry.955513771=bogusMessage
    let data = {
      "entry.1097062134": this.state.name,
      "entry.1615728613": this.state.email,
      "entry.955513771": this.state.message
    };
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    axios.post('https://docs.google.com/forms/d/e/1FAIpQLSflLheMadf-AJO4m9rg0FdFJIkrelvJiKDPhskbZYHzwleSng/formResponse', data, config)
      .then( res => {
          this.setState({ sent: true }, this.resetForm())
      })
      .catch( () => {
        console.log('Message not sent')
      })
    }
    resetForm = () => {
      this.setState({
          name: '',
          message: '',
          email: '',
          buttonText: 'Message Sent!'
      })
    }

  // TO DO: Clean up bootstrap nesting...

  render() {
    return (
      <div className="section row">
        <div id="contactSection" className="col-lg-12 col-xs-12 fluid-container text-center text-dark justify-content-center">
            <h3 className="display-4"> Contact Me </h3>
            <h3 className="lead"><small> If you've got a project that fits my skills, let me know!  </small></h3>
          <form className="mx-auto col-lg-6 collapse" id="collapseExample" onSubmit={ e => this.formSubmit(e) }>
             <div className="form-group row">
               <label for="name-input" className="col-2 col-offset-1 text-right col-form-label">Name</label>
             <div className="col-10">
                 <input className="form-control" type="text" placeholder="" id="name-input" onChange={e => this.setState({ name: e.target.value})} />
               </div>
             </div>
             <div className="form-group row">
               <label for="email-input" className="col-2 col-offset-1 text-right col-form-label">Email</label>
             <div className="col-10">
                 <input className="form-control" type="email" placeholder="" id="email-input" onChange={e => this.setState({ email: e.target.value})}/>
               </div>
             </div>
             <div className="form-group row">
               <label for="message-input" className="col-2 col-offset-1 text-right col-form-label">Message:</label>
             <div className="col-10">
                 <textarea className="form-control" rows="4" placeholder="" id="message-input" onChange={e => this.setState({ message: e.target.value})}/>
               </div>
             </div>
             <button type="submit" className="btn btn-default float-right">{ this.state.buttonText }</button>
           </form>


            <div className="col-12 float-right">
              <span className="fas fa-envelope text-dark" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"></span>
            </div>

        </div>
      </div>
    );
  }
}
//





// Contact.propTypes = {
//   prop: PropTypes.type.isRequired
// }

export default Contact;
