
export const applyPromoCode = (discount) => ({
    type: "ADD_DISCOUNT",
    discount
})


export const updateOrderTotal = (cartSubtotal, discount) => ({
    type: "UPDATE_TOTAL_PRICE",
    cartSubtotal,
    discount
})