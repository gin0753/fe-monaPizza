import React from 'react';
import './Newsletter.scss';
import Email from './components/Email/Email';

class Newsletter extends React.Component {
  render() {
    return (
      <div className="Checkout">
        <div className="newsletter">
          <div className="container">
            <h4>Sign up for the newsletter and get exclusive deals.</h4>
            <Email />
          </div>
        </div>
      </div>
    );
  }
}

export default Newsletter;
