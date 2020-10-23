import React from 'react';
import '../../Navigation.css';
import border from '../../../../../../images/navBorder.png';

function NavBar() {
  
    return (
      <div className="container__navBar">
            <i><img src={border} alt="fa-bars" /></i>
            <h5>Home > Checkout</h5>
      </div>
    );
}

export default NavBar;
