import Axios from 'axios';
import API from '../config/app'

export const fetchOrders = async (page, pageSize) => {
  const userId = sessionStorage.getItem('userID');
  const res = await Axios.get(API.backend_api + `/order/${userId}/${page}/${pageSize}`);
  return res;
};
