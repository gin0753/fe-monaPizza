import Axios from 'axios';
import API from '../../config/app';

export const getOrder = (userId, page, pageSize) => Axios.get(API.backend_api + `/order/${userId}/${page}/${pageSize}`);

export const createOrder = (orderInfo) => Axios.post(API.backend_api + '/order', orderInfo);

export const updateOrder = (status, page, pageSize) => Axios.post(API.backend_api + `/order/${status}/${page}/${pageSize}`);

export const changeOrderDetails = (orderID, updateInfo, config) => Axios.put(API.backend_api + `/order/${orderID}`, updateInfo, config);
