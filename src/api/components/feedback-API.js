import Axios from "axios";

export const storeFeedback = (feedback) => {
    return Axios.post('/feedback', feedback);
}
