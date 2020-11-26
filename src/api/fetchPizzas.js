import axios from 'axios';

export const fetchPizzas = async () => {
    const res = await axios.post('menu/1/8');
    return res
}