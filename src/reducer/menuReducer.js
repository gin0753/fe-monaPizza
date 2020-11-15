const initalState = {
    loading: false,
    pizzas: [],
    error: ''
}

export const menuReducer = ( state = initalState, action) => {

    switch(action.type) {

        case "FETCH_PIZZA_REQUREST":
            return {
                ...state,
                loading: true
            }

        case "FETCH_PIZZA_SUCCESS":
            return {
                ...state,
                loading: false,
                pizzas: action.payload,
                error: ''
            }

        case "FETCH_PIZZA_FALIURE":
            return {
                ...state,
                loading: false,
                pizzas: [],
                error: action.payload
            }

        default:
            return state;
    }
}