import React from 'react';
import '../../Navigation.css';
import border from '../../../../../../images/navBorder.png';
import { Link } from 'react-router-dom';

function NavBar() {

  return (
    <div className="container__navBar">
      <Link to='/home'>
        <a className="container__navBar--content">Home
        </a>
      </Link>
    </div>
  );
}

export default NavBar;
