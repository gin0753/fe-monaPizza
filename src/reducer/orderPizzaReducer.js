const initialState = {
    quantity: 0
}

export const orderPizzaReducer = (state = initialState, action) => {

    switch(action.type){

        case "ADD_PIZZA":
            state.quantity += 1;
            return state
            
        case "REMOVE_PIZZA":
            if(state.quantity === 0){
                return state;
            }
            else{
                state.quantity -= 1;
                return state
            }

        default:
            return state;
    }
}