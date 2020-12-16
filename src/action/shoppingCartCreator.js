export const applyPromoCode = (discount) => ({
  type: 'ADD_DISCOUNT',
  discount,
});

export const updateOrderTotal = (orderTotal) => ({
  type: 'UPDATE_TOTAL_PRICE',
  orderTotal,
});

export const rmProductList = (index, cartSubtotal, totalPrice) => ({
  type: 'REMOVE_PIZZA',
  index,
  cartSubtotal,
  totalPrice,
});

export const addPizzaList = (newList, subPrice) => ({
  type: 'ADD_PIZZA',
  newList,
  subPrice,
});
