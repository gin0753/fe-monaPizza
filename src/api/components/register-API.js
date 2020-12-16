import Axios from 'axios';

export const userRegistration = (RegisterInfo) => Axios.post('/register', RegisterInfo);
