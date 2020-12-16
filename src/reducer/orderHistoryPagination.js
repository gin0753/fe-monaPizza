const initialState = {
    pageNum: 1,
  };

  export const updateOrderHistory = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_PAGE":
        return state = {
          ...state,
          pageNum: action.pageNum,
        };
      default:
        return state;
    }
  };