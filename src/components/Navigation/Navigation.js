import React from 'react';
import './Navigation.css';
import Title from './components/Title/Title';
import NavBar from './components/NavBar/NavBar';

class Navigation extends React.Component {
  render() {
    return (
      <div className="Checkout">
        <div className="navigation">
          <div className="container">
            <Title />
            <NavBar />
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
