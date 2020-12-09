const defaultState = {
  productList: [
    {
      name: "Moorish Lamb",
      size: "Large",
      price: 19.0,
      qty: 1,
      totalPrice: 19.0,
    },
  ],
    
    discount: 0,

    cartSubtotal: 0.00,

    orderTotal: 0.00
}

export const shoppingCartReducer = (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));

    switch(action.type) {
        
        case "ADD_DISCOUNT":
            newState.discount = action.discount;
            return newState;
        
        case "UPDATE_TOTAL_PRICE":
            newState.orderTotal = action.orderTotal;
            return newState;

        case "REMOVE_PIZZA":
            newState.productList.splice(action.index, 1);
            newState.cartSubtotal = action.cartSubtotal - action.totalPrice;
            return newState;

        case "ADD_PIZZA":
            newState.productList = action.newList;
            newState.cartSubtotal = action.subPrice;
            return newState;


        default:
            return state;
    }
}
