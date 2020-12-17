import React from 'react';

const MenuItems = ({
  details: {
    orderPlacedTime, _id, orderList, totalPrice, orderStatus, discount
  },
}) => {
  const orderNumber = _id.substring(_id.length - 4);
  return (
    <li className="order-history__wrap__orders__item">
      <h2>
        <strong>{orderPlacedTime}</strong>
        order number:
        {orderNumber}
      </h2>
      <h2>        
      discount: 
      ${discount}.00</h2>
      <div className="order-bottom">
        <ul>
          {orderList.map((pizza) => (
            <li key={pizza._id}>
              <span>
                {pizza.pizzaName}
                {' '}
                x
                {' '}
                {pizza.qty}
              </span>
              <span>
                $
                {pizza.totalPrice}
              </span>
            </li>
          ))}
        </ul>
        <div className="total-price">
          <h3>
            $
            {totalPrice}
          </h3>
        </div>
        <div className="order-status">
          <h3>{orderStatus}</h3>
        </div>
      </div>
    </li>
  );
};

export default MenuItems;
