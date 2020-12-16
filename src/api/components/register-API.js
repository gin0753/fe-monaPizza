import Axios from "axios";

export const userRegistration = (RegisterInfo) => {
    return Axios.post('/register', RegisterInfo);
}
