import Axios from 'axios';

export const fetchOrders = async (page, pageSize) => {
  const userId = sessionStorage.getItem('userID');
  const res = await Axios.get(`/order/${userId}/${page}/${pageSize}`);
  return res;
};
