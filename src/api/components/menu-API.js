import Axios from "axios";

export const addMenuItem = (addPizza, config) => {
    return Axios.post(`/menu/`, addPizza, config);
}

export const removeMenuItem = (PizzaName, config) => {
    return Axios.delete(`/menu/${PizzaName}`, config);
}

export const updateMenuItem = (PizzaName, addPizza, config) => {
    return Axios.put(`/menu/${PizzaName}`, addPizza, config);
}