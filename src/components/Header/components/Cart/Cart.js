import React from 'react';
import '../../Header.scss';
import cart from 'images/shopping-cart-solid.svg';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggleCart();
  }

  render() {
    return (
      <div className="cart">
        <button onClick={this.handleClick} className={this.props.cartstatus ? 'slideright' : ''}><img src={cart} alt="fa-bars" /></button>
      </div>
    );
  }
}

export default Cart;
