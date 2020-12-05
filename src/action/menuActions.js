import { fetchPizzas } from '../api/fetchPizzas'

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
        const res = await fetchPizzas();
        try{
            const pizzas = res.data
            await dispatch(fetchPizzaSuccess(pizzas))
        }
        catch (err) {
            await dispatch(fetchPizzaFaliure(err));
        }
    }
}