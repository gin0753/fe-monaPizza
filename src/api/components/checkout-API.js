import Axios from "axios";

export const checkoutPayment = (token, product, config) => {
    return Axios.post('/checkout', {token, product}, config)
}