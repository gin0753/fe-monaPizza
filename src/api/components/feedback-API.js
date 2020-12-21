import Axios from 'axios';
import API from '../../config/app';

export const storeFeedback = (feedback) => Axios.post(API.backend_api + '/feedback', feedback);
