import Axios from 'axios';
import API from '../../config/app'

export const userRegistration = (RegisterInfo) => Axios.post(API.backend_api + '/register', RegisterInfo);
