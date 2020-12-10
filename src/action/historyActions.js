import { fetchOrders } from '../api/fetchOrders'

const fetchOrderRequest = () => {
    return {
        type: 'FETCH_ORDER_REQUEST'
    }
}

const fetchOrderSuccess = orders => {
    return {
        type: 'FETCH_ORDER_SUCCESS',
        payload: orders
    }
}

const fetchOrderFaliure = err => {
    return {
        type: 'FETCH_ORDER_FAILURE',
        payload: err
    }
}



export const fetchOrder = (page, pageSize) => {
    return async (dispatch) => {
        await dispatch(fetchOrderRequest)
        const res = await fetchOrders(page, pageSize);
        try{
            const orders = res.data;
            await dispatch(fetchOrderSuccess(orders))
        }
        catch(err){
            await dispatch(fetchOrderFaliure(err))
        }
    }
}