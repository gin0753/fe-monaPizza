import Axios from 'axios';
import API from '../../config/app';

export const addMenuItem = (addPizza, config) => Axios.post(API.backend_api + '/menu/', addPizza, config);

export const removeMenuItem = (userId, PizzaName, config) => {
    return Axios.delete(API.backend_api + `/menu/${userId}/${PizzaName}`, config);
}

export const updateMenuItem = (userId, PizzaName, addPizza, config) => {
    return Axios.put(API.backend_api + `/menu/${userId}/${PizzaName}`, addPizza, config);
}
