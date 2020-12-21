import Axios from 'axios';
import API from '../../config/app';

export const getCartItem = (userId, page, pageSize) => Axios.get(API.backend_api + `/cart/${userId}/${page}/${pageSize}`);

export const viewCartItem = (userId, pizzaName, pizzaSize) => Axios.get(API.backend_api + `/cart?userId=${userId}&pizzaName=${pizzaName}&pizzaSize=${pizzaSize}`);

export const addCartItem = (pizzaSelected) => Axios.post(API.backend_api + '/cart', pizzaSelected);

export const updateCartItem = (pizzaId, pizzaSelected) => Axios.put(API.backend_api + `/cart/${pizzaId}`, pizzaSelected);

export const removeCartItem = (pizzaId) => Axios.delete(API.backend_api + `/cart/${pizzaId}`);

export const removeAllItems = () => Axios.delete(API.backend_api + '/cart/');
