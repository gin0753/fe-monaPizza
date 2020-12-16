import React from 'react';
import CartTotal from './Components/CartTotal';
import OrderResult from './Components/OrderResult';
import './shoppingCartStyle.css';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div className="shopping-cart">
        <div className="main flex-container">
          <OrderResult {...this.props} />
          <CartTotal />
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
