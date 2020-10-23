import React from 'react';
import CartTotal from './Components/CartTotal';
import OrderResult from './Components/OrderResult';
import './shoppingCartStyle.css';


function ShoppingCart() {
  return (
    <div className="shopping-cart">
      <div className="main flex-container">
        <OrderResult />
        <CartTotal />
      </div>
    </div>
  );
}

export default ShoppingCart;
