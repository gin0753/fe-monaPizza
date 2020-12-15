import Axios from "axios";

export const getOrder = (userId, page, pageSize) => {
    return Axios.get(`/order/${userId}/${page}/${pageSize}`);
}

export const createOrder = (orderInfo) => {
    return Axios.post('/order', orderInfo);
}

export const updateOrder = (status, page, pageSize) => {
    return Axios.post(`/order/${status}/${page}/${pageSize}`);
}

export const changeOrderDetails = (orderID, updateInfo, config) => {
    return Axios.put(`/order/${orderID}`, updateInfo, config);
}