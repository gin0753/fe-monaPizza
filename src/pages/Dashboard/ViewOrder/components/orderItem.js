import React from "react";


const MenuItems = ({details: {orderPlacedTime, _id, orderList, totalPrice, orderNotes}}) => {
  const orderNumber = _id.substring(_id.length - 4);
  console.log(orderList);
  return (
    <li className='order-history__wrap__orders__item'>
    <h2>
      <strong>{orderPlacedTime}</strong>order number: {orderNumber}
    </h2>
    <div className='order-bottom'>
      <ul>
        {orderList.map((pizza) => 
            (
              <li key={pizza._id}>
                <span>{pizza.pizzaName} x {pizza.qty}</span>
                <span>${pizza.totalPrice}</span>
              </li>
            )
        )}
      </ul>
      <div className='order-toppings'>
          <ul>
            {orderList.map((pizza) => 
                (
                  <li key={pizza._id}>
                      {pizza.toppings.map((topping, index) => 
                        (
                          <span key={index}>{topping}</span>
                        )
                    )}
                  </li>
                )
            )}
        </ul>
      </div>
      <div className='order-notes'>
        <h3>{orderNotes}</h3>
      </div>
    </div>
  </li>
  );
};

export default MenuItems;
