import React, { Component, PropTypes } from 'react';

/**
 * Header
 */
export class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </nav>
      </div>
    );
  }
}

// Header.propTypes = {
//   prop: PropTypes.type.isRequired
// }

export default Header;
