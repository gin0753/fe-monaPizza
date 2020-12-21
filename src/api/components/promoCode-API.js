import Axios from 'axios';
import API from '../../config/app'

export const getPromoCode = (codeNum) => Axios.get(API.backend_api + `/promoCode?codeNum=${codeNum}`);
