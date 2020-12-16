import React from 'react';
import './Footer.css';
import Copyright from './components/Copyright/Copyright';

class Footer extends React.Component {
  render() {
    return (
      <div className="Checkout">
        <footer className="footer">
          <Copyright />
        </footer>
      </div>
    );
  }
}

export default Footer;
