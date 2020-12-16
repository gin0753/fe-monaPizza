import Axios from 'axios';

export const addMenuItem = (addPizza, config) => Axios.post('/menu/', addPizza, config);

export const removeMenuItem = (PizzaName, config) => Axios.delete(`/menu/${PizzaName}`, config);

export const updateMenuItem = (PizzaName, addPizza, config) => Axios.put(`/menu/${PizzaName}`, addPizza, config);
