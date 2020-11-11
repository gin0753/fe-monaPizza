const defaultState = {

    productList: [
        {
            name: "Moorish Lamb",
            size: "Large",
            price: 19.00,
            qty: 1,
            totalPrice: 19.00
        }
    ],
    
    discount: 0,

    cartSubtotal: 79.00,

    orderTotal: 79.00
}

export const shoppingCartReducer = (state = defaultState, action) => {

    const newState = JSON.parse(JSON.stringify(state));

    switch(action.type) {
        
        case "ADD_DISCOUNT":
            newState.discount = action.discount;
            return newState;
        
        case "UPDATE_TOTAL_PRICE":
            newState.orderTotal = action.cartSubtotal - action.discount;
            return newState;
        
        default:
            return state;
    }
}
