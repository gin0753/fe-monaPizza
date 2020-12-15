import Axios from "axios";

export const getCartItem = (userId, page, pageSize) => {
    return Axios.get(`/cart/${userId}/${page}/${pageSize}`);
}

export const viewCartItem = (userId, pizzaName, pizzaSize) => {
    return Axios.get(`/cart?userId=${userId}&pizzaName=${pizzaName}&pizzaSize=${pizzaSize}`);
}

export const addCartItem = (pizzaSelected) => {
    return Axios.post(`/cart`, pizzaSelected);
}

export const updateCartItem = (pizzaId, pizzaSelected) => {
    return Axios.put(`/cart/${pizzaId}`, pizzaSelected);
}

export const removeCartItem = (pizzaId) => {
    return Axios.delete(`/cart/${pizzaId}`);
}

export const removeAllItems = () => {
    return Axios.delete(`/cart/`);
}