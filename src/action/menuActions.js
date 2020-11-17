import axios from 'axios';

const fetchPizzaRequest = () => {
    return {
        type: 'FETCH_PIZZA_REQUREST'
    }
}

const fetchPizzaSuccess = pizzas => {
    return {
        type: 'FETCH_PIZZA_SUCCESS',
        payload: pizzas
    }
}

const fetchPizzaFaliure = err => {
    return {
        type: 'FETCH_PIZZA_FALIURE',
        payload: err
    }
}

export const fetchPizza = () => {
    return async (dispatch) => {
        await dispatch(fetchPizzaRequest)
        const res = await axios.post('/menu/1/12');
        try{
            const pizzas = res.data
            await dispatch(fetchPizzaSuccess(pizzas));
        }
        catch (e) {
            await dispatch(fetchPizzaFaliure(e));
        }
    }
}