import axios from 'axios';
import API from '../config/app'

export const fetchPizzas = async () => {
  const res = await axios.post(API.backend_api + 'menu/1/8');
  return res;
};
