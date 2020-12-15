import Axios from "axios";

export const userLogin = (LoginInfo) => {
    return Axios.post('/login', LoginInfo);
}

export const findUserInfo = (userID, currentPassword) => {
    return Axios.get(`/login/${userID}/${currentPassword}`);
}

export const updateUserInfo = (userID, Password) => {
    return Axios.put(`/login/${userID}`, {Password});
}

export const googleLogin = (googleInfo) => {
    return Axios.post('/googleLogin', googleInfo);
}
