import Axios from 'axios';
import API from '../../config/app';

export const getClientInfo = (userId) => Axios.get(API.backend_api + `/client/${userId}`);

export const storeClientInfo = (userInfo) => Axios.post(API.backend_api + '/client', userInfo);

export const updateClientInfo = (userId, updateInfo) => Axios.put(API.backend_api + `/client/${userId}`, updateInfo);
