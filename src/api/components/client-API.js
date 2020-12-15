import Axios from "axios";

export const getClientInfo = (userId) => {
    return Axios.get(`/client/${userId}`);
}

export const storeClientInfo = (userInfo) => {
    return Axios.post('/client', userInfo);
}

export const updateClientInfo = (userId, updateInfo) => {
    return Axios.put(`/client/${userId}`, updateInfo);
}