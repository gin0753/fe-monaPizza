import { fetchOrder } from 'api/orderCreated-API';

export const updateOrderInfo = (orderId) => async (dispatch) => {
  await dispatch(updateOrderInfoRequested());
  const res = await fetchOrder(orderId);
  try {
    await dispatch(updateOrderInfoSucceeded(res));
  } catch (err) {
    await dispatch(updateOrderInfoFailed(err));
  }
};

const updateOrderInfoRequested = () => ({
  type: 'REQUESTED',
});
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
}) => ({
  type: 'SUCCESS',
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
});
const updateOrderInfoFailed = (err) => ({
  type: 'FAILED',
  data: { err },
});
