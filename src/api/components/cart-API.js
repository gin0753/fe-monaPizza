import Axios from 'axios';

export const getCartItem = (userId, page, pageSize) => Axios.get(`/cart/${userId}/${page}/${pageSize}`);

export const viewCartItem = (userId, pizzaName, pizzaSize) => Axios.get(`/cart?userId=${userId}&pizzaName=${pizzaName}&pizzaSize=${pizzaSize}`);

export const addCartItem = (pizzaSelected) => Axios.post('/cart', pizzaSelected);

export const updateCartItem = (pizzaId, pizzaSelected) => Axios.put(`/cart/${pizzaId}`, pizzaSelected);

export const removeCartItem = (pizzaId) => Axios.delete(`/cart/${pizzaId}`);

export const removeAllItems = () => Axios.delete('/cart/');
