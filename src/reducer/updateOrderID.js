const initialState = {
  orderId: '',
};

export const updateOrderId = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_ORDER_ID':
      return state = {
        ...state,
        orderId: action.orderId,
      };
    default:
      return state;
  }
};
