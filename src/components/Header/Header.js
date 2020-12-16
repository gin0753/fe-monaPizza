import React from 'react';
import './Header.css';
import Logo from './components/Logo/Logo';
import Menu from './components/Menu/Menu';
import Avatar from './components/Avatar/Avatar';
import Cart from './components/Cart/Cart';

class Header extends React.Component {
  render() {
    return (
      <div className="Checkout">
        <header className="header">
          <Menu {...this.props} />
          <Logo />
          <div className="header__leftWrapper">
            <div className="header__leftWrapper--avatar">
              <Avatar />
            </div>
            <Cart {...this.props} />
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
