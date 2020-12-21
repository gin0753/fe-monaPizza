import Axios from 'axios';
import API from '../config/app';

export const fetchBlogs = () => Axios.get(API.backend_api + '/blog/1/4');
