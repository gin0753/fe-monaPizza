import React from 'react';
import '../../Media.css';
import logo from '../../../../images/media-logo.png';

class Contact extends React.Component {
  render() {
    return (
      <div className="contactdetails">
        <h2>+34 9 368 7050</h2>
        <h3>order@pizza.com</h3>
        <i><img src={logo} alt="mediaLogo" /></i>
      </div>
    );
  }
}

export default Contact;
