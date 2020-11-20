export const applyPromoCode = (discount) => ({
    type: "ADD_DISCOUNT",
    discount
})


// export const updateOrderTotal = (cartSubtotal, discount) => ({
//     type: "UPDATE_TOTAL_PRICE",
//     cartSubtotal,
//     discount
// })

export const rmProductList = (index, cartSubtotal, totalPrice) => ({
    type: "REMOVE_PIZZA",
    index,
    cartSubtotal,
    totalPrice
})


export const addPizzaList = (newList, subPrice) => ({
    type: "ADD_PIZZA",
    newList,
    subPrice
})
