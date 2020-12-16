import Axios from 'axios';

export const fetchOrder = async (orderId) => await Axios.get(`/order/${orderId}`);
