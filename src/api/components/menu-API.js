import Axios from "axios";

export const addMenuItem = (addPizza, config) => {
    return Axios.post(`/menu/`, addPizza, config);
}

export const removeMenuItem = (userId, PizzaName, config) => {
    return Axios.delete(`/menu/${userId}/${PizzaName}`, config);
}

export const updateMenuItem = (userId, PizzaName, addPizza, config) => {
    return Axios.put(`/menu/${userId}/${PizzaName}`, addPizza, config);
}