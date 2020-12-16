import Axios from 'axios';

export const getClientInfo = (userId) => Axios.get(`/client/${userId}`);

export const storeClientInfo = (userInfo) => Axios.post('/client', userInfo);

export const updateClientInfo = (userId, updateInfo) => Axios.put(`/client/${userId}`, updateInfo);
