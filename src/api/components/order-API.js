import Axios from 'axios';

export const getOrder = (userId, page, pageSize) => Axios.get(`/order/${userId}/${page}/${pageSize}`);

export const createOrder = (orderInfo) => Axios.post('/order', orderInfo);

export const updateOrder = (status, page, pageSize) => Axios.post(`/order/${status}/${page}/${pageSize}`);

export const changeOrderDetails = (orderID, updateInfo, config) => Axios.put(`/order/${orderID}`, updateInfo, config);
