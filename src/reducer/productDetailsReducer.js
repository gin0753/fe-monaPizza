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

        case "FETCH_PIZZA_REQUREST":

        
        case "DELETE_A_PIZZA":

        
        case "CHANGE_PIZZA_SIZE":

        
        default:
            return state;
    }
}