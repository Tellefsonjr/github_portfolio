import React, { Component, PropTypes } from 'react';
import Header from "./Header";
/**
 * Root
 */
export class Root extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <div id="bodyContainer" className="row">
          <div className="col-xs-10 col-xs-offset-1">
            {this.props.children}
          </div>
        </div>
      </div>

    );
  }
}

// Root.propTypes = {
//   prop: PropTypes.type.isRequired
// }

export default Root;
