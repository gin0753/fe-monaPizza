import { fetchPizzas } from '../api/fetchPizzas'

fetchPizzas();


const initialState = {
    quantity: 0
}

export const orderPizzaReducer = (state = initialState, action) => {

    switch(action.type){

        case "ADD_PIZZA":
            state = {
                ...state,
                quantity: state.quantity + 1
            }
            return state
            
        case "REMOVE_PIZZA":
            if(state.quantity === 0){
                return state;
            }
            else{
                state = {
                    ...state,
                    quantity: state.quantity - 1
                }
                return state
            }
        case "RESET_QUANTITY":
            state = {
                ...state,
                quantity: 0
            }
            return state
        default:
            return state;
    }
}