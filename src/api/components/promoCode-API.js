import Axios from "axios";

export const getPromoCode = (codeNum) => {
    return Axios.get(`/promoCode?codeNum=${codeNum}`);
}