Redux:

this.state = {

    productList: [
        {
            name: Moorish Lamb,
            size: large,
            price: 19,
            qty: 1,
            total-price: 19
        },
        {
            name: Peri Peri,
            size: medium,
            price: 24,
            qty: 1,
            total-price: 24
        }
    ],

    discount: 5, (default is 0, updated in shopping cart page)

    cart-subtotal: 79, (sum of all pizzas)

    order-total: 79

}

pizzaReducer