const initialState = {
  pageNumber: 1,
};

export const updateViewOrder = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PAGE':
      return state = {
        ...state,
        pageNumber: action.pageNumber,
      };
    default:
      return state;
  }
};
