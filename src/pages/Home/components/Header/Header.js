import React from 'react';
import Margherita from './img/Margherita.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <img src={Margherita} alt="Margherita" />
      </header>
    );
  }
}

export default Header;
