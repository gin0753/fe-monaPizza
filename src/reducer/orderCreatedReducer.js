const initialState = {
  loading: false,
  orderList: [],
  _id: '',
  orderPlacedTime: '',
  clientFirstName: '',
  clientLastName: '',
  billingAddr: '',
  city: '',
  postcode: '',
  contactNumber: '',
  cartSubTotal: '',
  totalPrice: '',
  shippingAddr: '',
};

export const orderCreatedReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUESTED':
      return {
        ...state,
        loading: true,
      };
    case 'SUCCESS':
      return {
        ...state,
        loading: false,
        orderList: action.data.orderList,
        _id: action.data._id,
        orderPlacedTime: action.data.orderPlacedTime,
        clientFirstName: action.data.clientFirstName,
        clientLastName: action.data.clientLastName,
        billingAddr: action.data.billingAddr,
        city: action.data.city,
        postcode: action.data.postcode,
        contactNumber: action.data.contactNumber,
        cartSubTotal: action.data.cartSubTotal,
        totalPrice: action.data.totalPrice,
        shippingAddr: action.data.shippingAddr,
      };
    case 'FAILED':
      return {
        ...state,
        loading: false,
        orderList: [],
        _id: '',
        orderPlacedTime: '',
        clientFirstName: '',
        clientLastName: '',
        billingAddr: '',
        city: '',
        postcode: '',
        contactNumber: '',
        cartSubTotal: '',
        totalPrice: '',
        shippingAddr: '',
      };
    default:
      return state;
  }
};
