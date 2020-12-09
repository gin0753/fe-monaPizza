const initialState = {
  orderId: "",
};

export const updateOrderId = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_ORDER_ID":
      state = {
        ...state,
        orderId: action.orderId,
      };
      break;
    default:
      return state;
  }
};
