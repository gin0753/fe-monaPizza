import Axios from 'axios';

export const storeFeedback = (feedback) => Axios.post('/feedback', feedback);
