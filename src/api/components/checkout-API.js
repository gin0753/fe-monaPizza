import Axios from 'axios';

export const checkoutPayment = (token, product, config) => Axios.post('/checkout', { token, product }, config);
