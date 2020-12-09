import React from 'react';
import '../../Navigation.css';
import { Link } from 'react-router-dom'

function NavBar() {

  return (
    <div className="container__navBar">
      <a href="/home" className="container__navBar--content"><Link style={{ color: '#FDBC2C' }} to='/home'>Home</Link> > Checkout</a>
    </div>
  );
}

export default NavBar;
