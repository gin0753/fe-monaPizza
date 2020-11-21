import React from 'react';

const MenuItems = ({ details: { pizzaName, qty,totalPrice} }) => {
  return (
    <dl>
        <dt>Spiced Pumpkin <span>x1</span></dt>
        <dd>$26.00</dd>
    </dl>
  );
};

export default MenuItems;
