const initialState = {
  loading: false,
  totalBlogs: "",
  results: [],
};

export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUESTED":
      return {
        ...state,
        loading: true,
      };
    case "SUCCESS":
      return {
        ...state,
        loading: false,
        totalBlogs: action.data.totalBlogs,
        results: action.data.results,
      };
    case "FAILED":
      return {
        ...state,
        loading: false,
        totalBlogs: "",
        results: [],
      };
    default:
      return state;
  }
};
