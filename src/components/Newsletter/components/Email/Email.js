import React from 'react';
import '../../Newsletter.css';

class Email extends React.Component {
  render() {
    return (
      <div className="container__emailwrapper">
        <input type="text" name="email" placeholder="Enter your email address" />
        <label>
          <button type="button" className="subscribeButton">SUBSCRIBE</button>
        </label>
      </div>
    );
  }
}

export default Email;
