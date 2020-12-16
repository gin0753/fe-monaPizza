const initalState = {
  loading: false,
  orders: [],
  error: '',
};

export const historyReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'FETCH_ORDER_REQUEST':
      return {
        ...state,
        loading: true,
      };

    case 'FETCH_ORDER_SUCCESS':
      return {
        ...state,
        loading: false,
        orders: action.payload,
        error: '',
      };

    case 'FETCH_ORDER_FAILURE':
      return {
        ...state,
        loading: true,
        orders: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
