import Axios from 'axios';
import API from '../../config/app'

export const checkoutPayment = (token, product, config) => Axios.post(API.backend_api + '/checkout', { token, product }, config);
