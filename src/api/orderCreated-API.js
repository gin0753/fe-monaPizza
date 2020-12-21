import Axios from 'axios';
import API from '../config/app'

export const fetchOrder = async (orderId) => await Axios.get(API.backend_api + `/order/${orderId}`);
