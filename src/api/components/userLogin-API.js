import Axios from 'axios';

export const userLogin = (LoginInfo) => Axios.post('/login', LoginInfo);

export const findUserInfo = (userID, currentPassword) => Axios.get(`/login/${userID}/${currentPassword}`);

export const updateUserInfo = (userID, Password) => Axios.put(`/login/${userID}`, { Password });

export const googleLogin = (googleInfo) => Axios.post('/googleLogin', googleInfo);
