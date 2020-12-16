import Axios from 'axios';

export const getPromoCode = (codeNum) => Axios.get(`/promoCode?codeNum=${codeNum}`);
