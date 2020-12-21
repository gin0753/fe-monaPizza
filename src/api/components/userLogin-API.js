import Axios from 'axios';
import API from '../../config/app'

export const userLogin = (LoginInfo) => Axios.post(API.backend_api + '/login', LoginInfo);

export const findUserInfo = (userID, currentPassword) => Axios.get(API.backend_api + `/login/${userID}/${currentPassword}`);

export const updateUserInfo = (userID, Password) => Axios.put(API.backend_api + `/login/${userID}`, { Password });

export const googleLogin = (googleInfo) => Axios.post(API.backend_api + '/googleLogin', googleInfo);
