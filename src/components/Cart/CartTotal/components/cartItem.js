import React from 'react';

const MenuItems = ({
  details: {
    Img, text, pizzaName, pizzaSize, qty, pizzaPrice, toppings,
  },
}) => (
  <li>
    <img src={Img} alt={text} />
    <div>
      <h5>{pizzaName}</h5>
      <p>
        <span className="subtitle">SIZE:</span>
        {' '}
        {pizzaSize}
      </p>
      <p>
        <span className="red">
          {qty}
          x
        </span>
        {' '}
        $
        {pizzaPrice}
        .00
      </p>
      <p>
        <span className="red">
          {toppings.length}
          x
        </span>
        {' '}
        Toppings
      </p>
    </div>
  </li>
);

export default MenuItems;
