import Axios from "axios";

export const fetchOrder = async (orderId) => {
  return await Axios.get(`/order/${orderId}`);
};
