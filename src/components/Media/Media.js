import React from 'react';
import './Media.scss';
import Contact from './components/Contact/Contact';
import Social from './components/Social/Social';

class Media extends React.Component {
  render() {
    return (
      <div className="Checkout">
        <div className="media">
          <div>
            <Contact />
            <Social />
          </div>
        </div>
      </div>
    );
  }
}

export default Media;
