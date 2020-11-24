const initialState = {
  orderList: [],
  _id: "",
  orderPlacedTime: "",
  clientFirstName: "",
  clientLastName: "",
  billingAddr: "",
  city: "",
  postcode: "",
  contactNumber: "",
  cartSubTotal: "",
  totalPrice: "",
  shippingAddr: "",
};

export const orderCreatedReducer = (state  = initialState, action) => {
  switch (action.type) {
    case "UPDATE_ORDER_INFO":
      return {
        ...state,
        orderList: action.orderList,
        _id: action._id,
        orderPlacedTime: action.orderPlacedTime,
        clientFirstName: action.clientFirstName,
        clientLastName: action.clientLastName,
        billingAddr: action.billingAddr,
        city: action.city,
        postcode: action.postcode,
        contactNumber: action.contactNumber,
        cartSubTotal: action.cartSubTotal,
        totalPrice: action.totalPrice,
        shippingAddr: action.shippingAddr,
      };
    default:
      return state;
  }
};
