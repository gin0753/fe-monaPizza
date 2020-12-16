export const addAPizza = () => ({
  type: 'ADD_A_PIZZA',
});

export const deleteAPizza = () => ({
  type: 'DELETE_A_PIZZA',
});

export const changePizzaSize = (size) => ({
  type: 'CHANGE_PIZZA_SIZE',
  size,
});
