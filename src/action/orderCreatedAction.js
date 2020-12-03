import { fetchOrder } from "../api/orderCreated-API";

export const updateOrderInfo = (orderId) => {
  return async (dispatch) => {
    await dispatch(updateOrderInfoRequested());
    const res = await fetchOrder(orderId);
    try {
      await dispatch(updateOrderInfoSucceeded(res));
    } catch (err) {
      await dispatch(updateOrderInfoFailed(err));
    }
  };
};

const updateOrderInfoRequested = () => {
  return {
    type: "REQUESTED",
  };
};
const updateOrderInfoSucceeded = ({
  data: {
    orderList,
    _id,
    orderPlacedTime,
    clientFirstName,
    clientLastName,
    billingAddr,
    city,
    postcode,
    contactNumber,
    cartSubTotal,
    totalPrice,
    shippingAddr,
  },
}) => {
  return {
    type: "SUCCESS",
    data: {
      orderList,
      _id,
      orderPlacedTime,
      clientFirstName,
      clientLastName,
      billingAddr,
      city,
      postcode,
      contactNumber,
      cartSubTotal,
      totalPrice,
      shippingAddr,
    },
  };
};
const updateOrderInfoFailed = (err) => {
  return {
    type: "FAILED",
    data: { err },
  };
};
