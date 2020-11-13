const defaultState = {
    pizzaName: "Peri-Peri",
    pizzaIngredient: 
    "Marinated Chicken Breast Fillets, Shallots, Roasted Capsicum, Caramelised Onions& Bocconcini on a Tomato base, topped with Peri-Peri sauce",
    size: "Large",
    price: 21,
    quantity: 1,
}

export const productDetailsReducer = (state = defaultState, action) => {
   
    const newState = JSON.parse(JSON.stringify(state));

    switch(action.type) {

        case "ADD_A_PIZZA":
            newState.quantity = newState.quantity + 1;
            newState.price = defaultState.price * newState.quantity;
            return newState;
        
        case "DELETE_A_PIZZA":
            if(newState.quantity <= 0) {
                newState.quantity = 0;
            }else{
                newState.quantity = newState.quantity - 1;
                newState.price = defaultState.price * newState.quantity;
            }
            return newState;
        
        case "CHANGE_PIZZA_SIZE":
            newState.size = action.size;
            return newState;
        
        default:
            return state;
    }
}