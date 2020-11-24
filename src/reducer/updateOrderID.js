const initialState = {
  orderId: "5fbb93853ef47035cc5d3493",
};

export const updateOrderId = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_ORDER_ID":
      state = {
        ...state,
        orderId: action.orderId,
      };
    default:
      return state;
  }
};
